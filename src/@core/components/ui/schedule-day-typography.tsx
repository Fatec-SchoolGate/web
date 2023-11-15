import { useTranslation } from "react-i18next"
import DayTypography from "./day-typography"
import { ScheduleDto } from "@/views/subject/dto/schedule.dto";
import { isTodayTheDay } from "@/@core/utils/is-today-the-day";

interface ScheduleDayTypographyProps {
    schedule: ScheduleDto;
}

const ScheduleDayTypography = (props: ScheduleDayTypographyProps) => {
    const { schedule } = props;

    const { t } = useTranslation();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: 4
            }}
        >
            <DayTypography label={`${t("sunday")}`} selected={schedule.sunday} underline={isTodayTheDay("sunday")} />
            <DayTypography label={`${t("monday")}`} selected={schedule.monday} underline={isTodayTheDay("monday")}  />
            <DayTypography label={`${t("tuesday")}`} selected={schedule.tuesday} underline={isTodayTheDay("tuesday")}  />
            <DayTypography label={`${t("wednesday")}`} selected={schedule.wednesday} underline={isTodayTheDay("wednesday")}  />
            <DayTypography label={`${t("thursday")}`} selected={schedule.thursday} underline={isTodayTheDay("thursday")}  />
            <DayTypography label={`${t("friday")}`} selected={schedule.friday} underline={isTodayTheDay("friday")}  />
            <DayTypography label={`${t("saturday")}`} selected={schedule.saturday} underline={isTodayTheDay("saturday")}  />
        </div>
    );
}

export default ScheduleDayTypography;