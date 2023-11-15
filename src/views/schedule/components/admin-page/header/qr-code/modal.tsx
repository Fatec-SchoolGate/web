import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Dialog, IconButton, Skeleton, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { EventSourcePolyfill } from "event-source-polyfill";
import useThemeOptions from "@/@core/theme/use-theme-options";
import { useScheduleId } from "@/views/schedule/utils/use-schedule-id";
import { useAuthStore } from "@/@core/stores/authStore";

interface QrCodeModalProps {
    open: boolean;
    onClose: () => void;
}

const QrCodeModal = (props: QrCodeModalProps) => {
    const { open, onClose } = props;

    const { accessToken } = useAuthStore();

    const [fullScreen, setFullScreen] = useState(false);
    const [attendanceToken, setAttendanceToken] = useState<string | null>(null);

    const scheduleId = useScheduleId();

    const toggleFullScreen = () => setFullScreen(!fullScreen);

    const lightOptions = useThemeOptions("defaultPaletteLight");
    
    const lightTheme = createTheme(lightOptions);

    useEffect(() => {
        if (!scheduleId || !accessToken) return;

        const eventSource = new EventSourcePolyfill(`${process.env.NEXT_PUBLIC_URL}/attendances/generate-attendance-token-stream/${scheduleId}`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        });

        eventSource.onmessage = (stream) => {
            const { data } = stream;

            const decodedData = JSON.parse(data);
            const attendanceToken = decodedData?.attendanceToken ?? null;
            
            setAttendanceToken(attendanceToken);
        }

        return () => {
            eventSource.close();
        }
    }, [scheduleId, accessToken]);

    useEffect(() => {
        if (!open) setAttendanceToken(null);
    }, [open]);

    return (
        <ThemeProvider theme={lightTheme}>
            <Dialog
                open={open}
                onClose={onClose}
                fullScreen={fullScreen}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 8,
                        p: 12,
                        pt: 4,
                        width: "100%",
                        height: "100%",
                        alignItems: fullScreen ? "center" : "flex-end",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-end"
                        }}
                    >
                        <IconButton
                            disableRipple={false}
                            onClick={toggleFullScreen}
                        >
                            <Icon color={"#000"} icon={`material-symbols:${fullScreen ? "fullscreen-exit" : "fullscreen"}`}/>
                        </IconButton>
                    </Box>
                    {attendanceToken ? (
                        <QRCode
                            value={attendanceToken}
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    ) : (
                        <Skeleton
                            variant={"rectangular"}
                            animation={"wave"}
                            width={256}
                            height={256}
                        />
                    )}
                </Box>
            </Dialog>
        </ThemeProvider>
    );
}

export default QrCodeModal;