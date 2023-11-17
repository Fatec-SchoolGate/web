import { Box } from "@mui/material"

import styles from "./index.module.css";

interface OnlineCircleProps {
    online: boolean;
}

const OnlineCircle = (props: OnlineCircleProps) => {
    const { online } = props;

    return (
        <Box
            sx={{
                bgcolor: (theme) => online ? theme.palette.success.main : theme.palette.error.main,
                width: 10,
                height: 10,
                borderRadius: 100
            }}
        />
    );
}

export default OnlineCircle;