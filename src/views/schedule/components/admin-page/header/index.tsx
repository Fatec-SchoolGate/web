import { Box, Divider, Skeleton, Typography } from "@mui/material";
import QrCode from "./qr-code";
import InviteButton from "./invite-button";
import { useCurrentSchedule } from "@/views/schedule/utils/use-current-schedule";
import { isScheduleOnline } from "@/views/schedule/utils/is-schedule-online";
import OnlineCircle from "@/@core/components/ui/online-status";
import ScheduleDayTypography from "@/@core/components/ui/schedule-day-typography";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react/dist/iconify.js";
import FaceRecognitionButton from "./face-recognition-button";

const Header = () => {
    const { t } = useTranslation();

    const { schedule, isLoading } = useCurrentSchedule();
    
    if (isLoading || !schedule) {
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
                    flexDirection: "column",
                    gap: ".5rem"
                }}
            >
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={2}>
                    <Typography
                        variant={"h4"}    
                    >
                        {schedule?.subject?.name}
                    </Typography>
                    <OnlineCircle online={isScheduleOnline(schedule)}/>
                </Box>
                <Box
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: ".5rem"
                    }}
                >
                    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={1}>
                        <Icon icon={"mdi:clock-outline"}/>
                        <Typography
                            variant={"h5"}
                            textTransform={"lowercase"}
                        >
                            {schedule?.startTime.replace(/:00$/, "")} {t("until")} {schedule?.endTime.replace(/:00$/, "")}
                        </Typography>
                    </Box>
                    <Box display={"flex"} flexDirection={"row"} alignItems={"center"} gap={1}>
                        <Icon icon={"bi:calendar-week"}/>
                        <ScheduleDayTypography showDot={false} schedule={schedule}/>
                    </Box>
                </Box>
            </div>
            <Box>
                <InviteButton/>
                <QrCode/>
                <FaceRecognitionButton/>
            </Box>
        </Box>
    );
}

export default Header;