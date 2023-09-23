import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@mui/material";

const FaceRecognitionButton = () => {
    return (
        <Button
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
            <Icon icon={"icon-park-outline:ios-face-recognition"}/>
        </Button>
    );
}

export default FaceRecognitionButton;