import { ScheduleDto } from "@/views/subject/dto/schedule.dto";
import { Card, Typography, styled } from "@mui/material"
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import DayTypography from "./day-typography";
import Link from "next/link";

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
            href={`${router.asPath}/schedule/${schedule.id}`}
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
            <div>
                <Typography fontSize={20}>
                    {schedule.startTime} - {schedule.endTime}
                </Typography>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4
                }}
            >
                <DayTypography label={`${t("sunday")}`} selected={schedule.sunday}/>
                <DayTypography label={`${t("monday")}`} selected={schedule.monday} />
                <DayTypography label={`${t("tuesday")}`} selected={schedule.tuesday} />
                <DayTypography label={`${t("wednesday")}`} selected={schedule.wednesday} />
                <DayTypography label={`${t("thursday")}`} selected={schedule.thursday} />
                <DayTypography label={`${t("friday")}`} selected={schedule.friday} />
                <DayTypography label={`${t("saturday")}`} selected={schedule.saturday} />
            </div>
        </Card>
    );
}

export default ScheduleItem;