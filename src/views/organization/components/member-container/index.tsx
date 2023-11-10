import { Box, Card, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useSchedulesByOrganization } from "../../api/get-schedules-by-organization";
import { useTranslation } from "react-i18next";
import Loading from "../loading.";
import ScheduleItem from "./schedule-item";

const MemberContainer = () => {
    const { t } = useTranslation();

    const router = useRouter();
    const { organizationId } = router.query;

    const { data: response, isLoading } = useSchedulesByOrganization(organizationId as string);
    const schedules = response?.data.schedules ?? [];

    if (isLoading) return <Loading/>

    return (
        <Card
            sx={{
                px: 6,
                py: 6
            }}
        >
            <Typography variant={"h4"} mb={4}>{t("schedules")}</Typography>
            <Box>
                {(!schedules || schedules.length === 0) && (
                    <Typography fontSize={20} textAlign={"center"}>
                        {t("noResults")}
                    </Typography>
                )}
                {schedules.map((schedule) => (
                    <ScheduleItem
                        schedule={schedule}
                        key={schedule.id}    
                    />
                ))}
            </Box>
        </Card>
    );
}

export default MemberContainer;