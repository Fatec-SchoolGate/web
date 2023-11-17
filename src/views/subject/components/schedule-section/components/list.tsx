import { useSchedules } from "@/views/subject/api/get-schedules";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ScheduleCard from "./schedule-card";
import { useTranslation } from "react-i18next";
import ScheduleItem from "./schedule-item";
import NoResults from "@/@core/components/ui/no-results";
import ListSkeleton from "@/@core/components/ui/list-skeleton";

const List = () => {
    const { t } = useTranslation();

    const router = useRouter();
    const { subjectId } = router.query;
    const { data: response, isLoading } = useSchedules(subjectId as string);
    const schedules = response?.data.schedules ?? [];
    
    if (isLoading) return <ListSkeleton/>;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                mb: 4
            }}
        >
            {schedules.length === 0 && <NoResults/>}
            {schedules.map((schedule) => (
                <ScheduleItem
                    schedule={schedule}
                    key={schedule.id}
                />
            ))}
        </Box>
    );
}

export default List;