import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";
import { useScheduleStore } from "../../../store";

const QrCodeButton = () => {
    const { openQrCodeModal } = useScheduleStore();

    return (
        <Button
            onClick={openQrCodeModal}
            color={"inherit"}
            sx={{
                borderRadius: 1,
                width: 32,
                minWidth: 0,
                height: 32,
                p: 0,
                fontSize: 22
            }}
            variant={"contained"}
        >
            <Icon icon={"heroicons-outline:qrcode"}/>
        </Button>
    );
}

export default QrCodeButton;