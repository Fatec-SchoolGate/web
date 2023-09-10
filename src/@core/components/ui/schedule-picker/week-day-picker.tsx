import { ToggleButton, ToggleButtonGroup, alpha, styled } from "@mui/material";
import { useEffect, useState } from "react";

export type Weekday = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

export interface WeekdayPickerReturn {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}

const DayButton = styled(ToggleButton)<{ value: Weekday }>(({ theme }) => ({
    padding: theme.spacing(2),
    width: 28,
    height: 28,
    borderRadius: "100px !important",
    transition: "50ms",
    border: `1px solid #ededed55 !important`,
    margin: theme.spacing(2),
    "@media (min-width: 700px)": {
        width: 38,
        height: 38,
    },
    "&.Mui-selected:hover": {
        backgroundColor: alpha(theme.palette.primary.main, 0.7)
    },
    "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        border: `1px solid ${theme.palette.primary.dark} !important`,
    }
}));

interface Props {
    onChange: (weekdays: WeekdayPickerReturn) => void;
}

const WeekdayPicker = (props: Props) => {

    const { onChange } = props;

    const [weekdays, setWeekdays] = useState<Weekday[] | undefined>();
    
    const handleWeekdays = (_: any, weekday: Weekday[]) => setWeekdays(weekday);

    useEffect(() => onChange({
        monday: weekdays?.includes("monday") ?? false,
        tuesday: weekdays?.includes("tuesday") ?? false,
        wednesday: weekdays?.includes("wednesday") ?? false,
        thursday: weekdays?.includes("thursday") ?? false,
        friday: weekdays?.includes("friday") ?? false,
        saturday: weekdays?.includes("saturday") ?? false,
        sunday: weekdays?.includes("sunday") ?? false
    }), [weekdays]);

    return (
        <ToggleButtonGroup
            onChange={handleWeekdays}
            value={weekdays}
        >
            <DayButton value={"sunday"}>S</DayButton>
            <DayButton value={"monday"}>M</DayButton>
            <DayButton value={"tuesday"}>T</DayButton>
            <DayButton value={"wednesday"}>W</DayButton>
            <DayButton value={"thursday"}>T</DayButton>
            <DayButton value={"friday"}>F</DayButton>
            <DayButton value={"saturday"}>S</DayButton>
        </ToggleButtonGroup>
    );
}

export default WeekdayPicker;