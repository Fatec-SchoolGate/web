import { Icon } from "@iconify/react";
import { Box, Card, Button, Typography } from "@mui/material";
import QrCodeButton from "./qr-code-button";
import FaceRecognitionButton from "./face-recognition-button";

interface Props {
    startTime: string;
    endTime: string;
}

const ScheduleCard = (props: Props) => {
    const { startTime, endTime } = props;

    return (
        <Card
            variant={"outlined"}
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: (theme) => theme.spacing(5),
                my: (theme) => theme.spacing(5)
            }}
        >
            <Box>
                <Typography>
                    {startTime} - {endTime}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    gap: 4
                }}
            >
                <FaceRecognitionButton/>
                <QrCodeButton/>
            </Box>
        </Card>
    );
}

export default ScheduleCard;