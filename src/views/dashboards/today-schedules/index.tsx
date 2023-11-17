import OnlineCircle from "@/@core/components/ui/online-status";
import { Box, Card, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const TodaySchedules = () => {
    const { t } = useTranslation();

    return (
        <Card
            sx={{
                p: 4
            }}
        >
            <Typography variant={"h4"}>{t("todaySchedules")}</Typography>
            <Typography variant={"caption"}>{t("nEvents", { eventsCount: 3 })}</Typography>

            <Box display={"flex"} flexDirection={"column"} gap={2} marginTop={4}>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={4} justifyContent={"space-between"}>
                    <Box>
                        <Typography>Aula de matemática</Typography>
                        <Typography variant={"body2"}>10:00 • 11:40</Typography>
                    </Box>
                    <OnlineCircle online={true}/>
                </Box>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={4} justifyContent={"space-between"}>
                    <Box>
                        <Typography>Aula de física</Typography>
                        <Typography variant={"body2"}>13:00 • 14:40</Typography>
                    </Box>
                    <OnlineCircle online={false}/>
                </Box>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={4} justifyContent={"space-between"}>
                    <Box>
                        <Typography>Aula de português</Typography>
                        <Typography variant={"body2"}>15:00 • 16:40</Typography>
                    </Box>
                    <OnlineCircle online={false}/>
                </Box>
            </Box>
        </Card>
    );
}

export default TodaySchedules;