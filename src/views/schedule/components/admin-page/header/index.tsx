import { Box, Skeleton, Typography } from "@mui/material";
import QrCode from "./qr-code";
import InviteButton from "./invite-button";
import { useCurrentSchedule } from "@/views/schedule/utils/use-current-schedule";

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
            <Typography
                variant={"h4"}    
            >
                {schedule?.subject?.name} • {schedule?.startTime} - {schedule?.endTime}
            </Typography>
            <Box>
                <InviteButton/>
                <QrCode/>
            </Box>
        </Box>
    );
}

export default Header;