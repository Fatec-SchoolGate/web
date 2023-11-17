import { Box, Skeleton, Typography } from "@mui/material";
import QrCode from "./qr-code";
import InviteButton from "./invite-button";
import { useCurrentSchedule } from "@/views/schedule/utils/use-current-schedule";
import { isScheduleOnline } from "@/views/schedule/utils/is-schedule-online";
import OnlineCircle from "@/@core/components/ui/online-status";

const Header = () => {
    const { schedule, isLoading } = useCurrentSchedule();
    
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
            <Box>
                <InviteButton/>
                <QrCode/>
            </Box>
        </Box>
    );
}

export default Header;