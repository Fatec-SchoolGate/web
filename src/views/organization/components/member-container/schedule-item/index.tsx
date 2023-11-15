import { ScheduleDto } from "@/views/subject/dto/schedule.dto";
import { Box, Card, Typography, styled } from "@mui/material"
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import DayTypography from "@/@core/components/ui/day-typography";
import Link from "next/link";
import ScheduleDayTypography from "@/@core/components/ui/schedule-day-typography";

interface ScheduleItemProps {
    schedule: ScheduleDto;
}

const ScheduleItem = (props: ScheduleItemProps) => {

    const { t } = useTranslation();

    const { schedule } = props;

    const router = useRouter();
    
    return (
        <Card
            variant={"outlined"}
            component={Link}
            href={`${router.asPath}/subjects/${schedule.subjectId}/schedule/${schedule.id}`}
            sx={{
                p: 4,
                textDecoration: "none",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row"
                },
                justifyContent: "space-between",
                alignItems: {
                    xs: "flex-start",
                    sm: "center"
                }
            }}
        >
            <Box>
                <Typography fontSize={20}>
                    {schedule.subject?.name}
                </Typography>
                <Typography fontSize={20}>
                    {schedule.startTime} - {schedule.endTime}
                </Typography>
            </Box>
            <ScheduleDayTypography schedule={schedule}/>
        </Card>
    );
}

export default ScheduleItem;