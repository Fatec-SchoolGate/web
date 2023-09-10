import ListItemCard from "@/@core/components/ui/ListItemCard";
import { useSchedules } from "@/views/subject/api/get-schedules";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import ScheduleCardActions from "./schedule-card-actions";

const List = () => {

    const router = useRouter();
    const { subjectId } = router.query;
    const { data: response, isLoading } = useSchedules(subjectId as string);
    const schedules = response?.data.schedules ?? [];
    
    return (
        <Box>
            {schedules.map((schedule) => (
                <ListItemCard
                    id={schedule.id}
                    key={schedule.id}
                    title={`${schedule.startTime}-${schedule.endTime}`}
                    CustomActions={<ScheduleCardActions/>}
                />
            ))}
        </Box>
    );
}

export default List;