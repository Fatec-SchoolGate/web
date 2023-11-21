import { useTranslation } from "react-i18next"
import DayTypography from "./day-typography"
import { ScheduleDto } from "@/views/subject/dto/schedule.dto";
import { isTodayTheDay } from "@/@core/utils/is-today-the-day";

interface ScheduleDayTypographyProps {
    schedule: ScheduleDto;
    showDot?: boolean;
}

const ScheduleDayTypography = (props: ScheduleDayTypographyProps) => {
    const { schedule, showDot } = props;

    const { t } = useTranslation();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 4
            }}
        >
            <DayTypography label={`${t("sunday")}`} showDot={showDot} selected={schedule.sunday} underline={isTodayTheDay("sunday")} />
            <DayTypography label={`${t("monday")}`} showDot={showDot} selected={schedule.monday} underline={isTodayTheDay("monday")}  />
            <DayTypography label={`${t("tuesday")}`} showDot={showDot} selected={schedule.tuesday} underline={isTodayTheDay("tuesday")}  />
            <DayTypography label={`${t("wednesday")}`} showDot={showDot} selected={schedule.wednesday} underline={isTodayTheDay("wednesday")}  />
            <DayTypography label={`${t("thursday")}`} showDot={showDot} selected={schedule.thursday} underline={isTodayTheDay("thursday")}  />
            <DayTypography label={`${t("friday")}`} showDot={showDot} selected={schedule.friday} underline={isTodayTheDay("friday")}  />
            <DayTypography label={`${t("saturday")}`} showDot={showDot} selected={schedule.saturday} underline={isTodayTheDay("saturday")}  />
        </div>
    );
}

export default ScheduleDayTypography;