import { QrReader } from "react-qr-reader";
import toast from "react-hot-toast";
import { useConfirmAttendance } from "../api/confirm-attendance";
import { useTranslation } from "react-i18next";
import { Box, GlobalStyles, IconButton } from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { AxiosError } from "axios";

interface ScannerProps {
    onClose: () => void;
    show: boolean;
}

const ScannerSection = (props: ScannerProps) => {
    const { onClose, show } = props;

    const [lastDecodeTimestamp, setLastDecodeTimestamp] = useState<number | null>(null);

    const { t } = useTranslation();

    const { mutate: confirmAttendance, isLoading } = useConfirmAttendance();

    const onDecodeQrCode = (result: string, timestamp: number) => {
        if (isLoading || (lastDecodeTimestamp != null && timestamp - 1000 < lastDecodeTimestamp)) return;

        onClose();
        
        setLastDecodeTimestamp(timestamp);
        const toastId = toast.loading(t("confirmAttendanceLoading"));
        
        confirmAttendance(result, {
            onSuccess: () => {
                toast.dismiss(toastId);
                toast.success(t("confirmAttendanceSuccess"));
            },
            onError: (error) => {
                toast.dismiss();
                if (error instanceof AxiosError && error.response) {
                    toast.error(t(error.response?.data?.message ?? "attendanceError"));
                }
            }
        });
    }

    if (!show) return null;

    return (
        <Box
            sx={{
                display: show ? "inherit" : "none",
                top: 0,
                left: 0,
                position: "absolute",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
                backgroundColor: "#000",
                zIndex: (theme) => show ? theme.zIndex.modal : -1
            }}
        >
            {show && (
                <GlobalStyles
                    styles={{
                        body: {
                            overflow: "hidden"
                        }
                    }}
                />
            )}
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <QrReader
                    constraints={{
                        facingMode: "environment",
                        width: 300,
                        height: 300,
                        frameRate: 10
                    }}
                    onResult={(result) => result && onDecodeQrCode(result?.getText(), result?.getTimestamp())}
                    containerStyle={{
                        width: "100%"
                    }}
                />
            </div>
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    top: 5,
                    right: 5,
                    color: "#fff",
                    mixBlendMode: "difference",
                    zIndex: 9999
                }}
            >
                <Icon icon={"material-symbols:close"}/>
            </IconButton>
        </Box>
    );
}

export default ScannerSection;