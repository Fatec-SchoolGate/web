import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, IconButton } from "@mui/material";
import QrCodeModal from "./modal";
import { useState } from "react";

const QrCode = () => {
    const [modal, setModal] = useState(false);

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    return (
        <>
            <IconButton
                onClick={openModal}
            >
                <Icon icon={"heroicons-outline:qrcode"}/>
            </IconButton>
            <QrCodeModal
                open={modal}
                onClose={closeModal}
            />
        </>
    );
}

export default QrCode;