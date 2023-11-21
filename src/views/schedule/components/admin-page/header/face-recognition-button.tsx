import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton } from "@mui/material";

const FaceRecognitionButton = () => {
    return (
        <IconButton>
            <Icon icon={"mdi:face-recognition"}/>
        </IconButton>
    );
}

export default FaceRecognitionButton;