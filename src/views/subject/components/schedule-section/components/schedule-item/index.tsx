import { ScheduleDto } from "@/views/subject/dto/schedule.dto";
import { Card, Typography, styled } from "@mui/material"
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const DayTypography = styled(Typography)(({ theme }) => ({
    fontSize: 0,
    flex: 0,
    maxWidth: "fit-content",
    position: "relative",
    "&[aria-selected=true]": {
        color: theme.palette.primary.main,
        "&:after": {
            content: '"•"',
            width: "fit-content",
            position: "absolute",
            top: -10,
            left: "50%",
            transform: "translate(-50%)",
            fontSize: 16
        }
    },
    "&:first-letter": {
        fontSize: 16
    }
}));

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
            // onClick={() => router.push(`/schedules/${id}`)}
            sx={{
                p: 4,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
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
                <DayTypography aria-selected>{t("sunday")}</DayTypography>
                <DayTypography aria-selected>{t("monday")}</DayTypography>
                <DayTypography>{t("tuesday")}</DayTypography>
                <DayTypography>{t("wednesday")}</DayTypography>
                <DayTypography>{t("thursday")}</DayTypography>
                <DayTypography>{t("friday")}</DayTypography>
                <DayTypography>{t("saturday")}</DayTypography>
            </div>
        </Card>
    );
}

export default ScheduleItem;