import { useSchedules } from "@/views/subject/api/get-schedules";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import ScheduleCard from "./schedule-card";

const List = () => {

    const router = useRouter();
    const { subjectId } = router.query;
    const { data: response, isLoading } = useSchedules(subjectId as string);
    const schedules = response?.data.schedules ?? [];
    
    return (
        <Box>
            {schedules.map((schedule) => (
                <ScheduleCard
                    startTime={schedule.startTime}
                    endTime={schedule.endTime}
                    key={schedule.id}
                />
            ))}
        </Box>
    );
}

export default List;