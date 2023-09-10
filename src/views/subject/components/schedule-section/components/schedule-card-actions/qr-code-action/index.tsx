import { Icon } from "@iconify/react";
import { Button } from "@mui/material";

const QrCodeAction = () => {
    return (
        <Button
            variant={"contained"}
            color={"inherit"}
            sx={{
                minWidth: 0,
                width: 32,
                height: 32,
                fontSize: 24,
                p: 0
            }}
        >
            <Icon
                icon={"mdi:qrcode"}
            />
        </Button>
    );
}

export default QrCodeAction;