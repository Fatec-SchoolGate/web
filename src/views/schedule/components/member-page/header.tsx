import { Card, Typography } from "@mui/material";
import { useCurrentSchedule } from "../../utils/use-current-schedule";
import { isScheduleOnline } from "../../utils/is-schedule-online";
import ScheduleDayTypography from "@/@core/components/ui/schedule-day-typography";
import OnlineCircle from "@/@core/components/ui/online-status";

const Header = () => {
    const { schedule, isLoading } = useCurrentSchedule();

    if (!schedule && !isLoading) return <div>INVALID_SCHEDULE</div>;

    if (!schedule) return <div>loading</div>;

    return (
        <Card
            sx={{
                px: 4,
                py: 8,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
            }}
        >
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: ".5rem"
                }}
            >
                <Typography
                    variant={"h4"}    
                >
                    {schedule?.subject?.name} • {schedule?.startTime} - {schedule?.endTime} •
                </Typography>
                <OnlineCircle online={isScheduleOnline(schedule)}/>
            </div>
            <ScheduleDayTypography schedule={schedule}/>
        </Card>
    );
}

export default Header;