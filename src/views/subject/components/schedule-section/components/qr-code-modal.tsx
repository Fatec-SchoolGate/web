import { Box, Dialog } from "@mui/material";
import QRCode from "react-qr-code";

const QrCodeModal = () => {
    return (
        <Dialog
            open={true}
        >
            <Box
                sx={{
                    p: (theme) => theme.spacing(16)
                }}
            >
                <QRCode
                    value={"leticia te amo"}
                />
            </Box>
        </Dialog>
    );
}

export default QrCodeModal;