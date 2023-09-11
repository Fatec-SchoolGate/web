import { Icon } from "@iconify/react/dist/iconify.js";
import { Box, Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import QRCode from "react-qr-code";
import { useScheduleStore } from "../../../store";

const QrCodeModal = () => {
    const [fullScreen, setFullScreen] = useState(true);

    const { qrCodeModal, closeQrCodeModal } = useScheduleStore();

    const toggleFullScreen = () => setFullScreen(!fullScreen);

    return (
        <Dialog
            open={qrCodeModal}
            onClose={closeQrCodeModal}
            fullScreen={fullScreen}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "#fff", 
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
                        sx={{
                            color: "#000",
                        }}
                    >
                        <Icon icon={"material-symbols:fullscreen"}/>
                    </IconButton>
                </Box>
                <QRCode
                    value={""}
                    style={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </Box>
        </Dialog>
    );
}

export default QrCodeModal;