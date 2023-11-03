import { Box, Skeleton, Typography } from "@mui/material";
import { useScheduleId } from "../utils/use-schedule-id";
import { useSchedule } from "../api/get-schedule";

const Header = () => {
    const scheduleId = useScheduleId();
    const { data: response, isLoading } = useSchedule(scheduleId);
    const schedule = response?.data.schedule;

    if (isLoading) {
        return (
            <Skeleton
                variant={"rectangular"}
                height={400}
            />
        );
    }

    return (
        <Box
            sx={{
                px: 4,
                py: 8
            }}
        >
            <Typography
                variant={"h4"}    
            >
                {schedule?.subject?.name} • {schedule?.startTime} - {schedule?.endTime}
            </Typography>
            {/* {schedule?.subjectId && <QrCodeButton subjectId={schedule?.subjectId} />}
            <QrCodeModal/> */}
        </Box>
    );
}

export default Header;