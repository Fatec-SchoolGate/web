import { ToggleButton, ToggleButtonGroup, alpha, styled } from "@mui/material";
import { useState } from "react";

const DayButton = styled(ToggleButton)(({ theme }) => ({
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

const WeekdayPicker = () => {
    const [weekdays, setWeekdays] = useState<string | null>();
    
    const handleWeekdays = (_: any, weekday: string) => setWeekdays(weekday);

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