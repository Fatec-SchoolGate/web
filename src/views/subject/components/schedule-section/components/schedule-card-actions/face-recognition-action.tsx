import { Icon } from "@iconify/react";
import { Button } from "@mui/material";

const FaceRecognitionAction = () => {
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
                icon={"icon-park-outline:ios-face-recognition"}
            />
        </Button>
    );
}

export default FaceRecognitionAction;