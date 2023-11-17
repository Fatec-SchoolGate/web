import { Box } from "@mui/material";
import TodaySchedules from "./today-schedules";

const DashboardContainer = () => {
    return (
        <Box
            sx={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 4
            }}
        >
            <TodaySchedules/>
        </Box>
    );
}

export default DashboardContainer;