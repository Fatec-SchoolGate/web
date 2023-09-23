import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Dialog, IconButton, Skeleton, ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { useScheduleStore } from "../../../store";
import themeOptions from "@/@core/theme/themeOptions";

const QrCodeModal = () => {
    const [fullScreen, setFullScreen] = useState(false);
    const [attendanceToken, setAttendanceToken] = useState<string | null>(null);

    const { qrCodeModal, closeQrCodeModal } = useScheduleStore();

    const { scheduleId } = useScheduleStore();

    const toggleFullScreen = () => setFullScreen(!fullScreen);

    const lightTheme = createTheme(themeOptions("light"));

    useEffect(() => {
        if (!scheduleId) return;
        console.log(scheduleId);
        const eventSource = new EventSource(`${process.env.NEXT_PUBLIC_URL}/schedule-users/generate-attendance-token-stream/${scheduleId}`);
        eventSource.onmessage = (stream) => {
            const { data } = stream;

            const decodedData = JSON.parse(data);
            const attendanceToken = decodedData?.attendanceToken ?? null;
            console.log(attendanceToken);
            setAttendanceToken(attendanceToken);
        }

        return () => {
            eventSource.close();
        }
    }, [scheduleId]);

    useEffect(() => {
        if (!qrCodeModal) setAttendanceToken(null);
    }, [qrCodeModal]);

    return (
        <ThemeProvider theme={lightTheme}>
            <Dialog
                open={qrCodeModal}
                onClose={closeQrCodeModal}
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
                            <Icon icon={`material-symbols:${fullScreen ? "fullscreen-exit" : "fullscreen"}`}/>
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
                    {/* <span>{attendanceToken}</span> */}
                </Box>
            </Dialog>
        </ThemeProvider>
    );
}

export default QrCodeModal;