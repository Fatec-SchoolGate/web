import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimePicker from "./time-picker";
import WeekdayPicker, { Weekday, WeekdayPickerReturn } from "./week-day-picker";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";

const defaultWeekdays: WeekdayPickerReturn = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    sunday: false
};

type TimeRange = {
    startTime?: string;
    endTime?: string;
}

export interface SchedulePickerReturn {
    weekdays: WeekdayPickerReturn;
    timeRange: TimeRange;
}

interface Props {
    onChange: (value: SchedulePickerReturn) => void;
}

const SchedulePicker = (props: Props) => {
    const { onChange } = props;

    const [timeRange, setTimeRange] = useState<TimeRange>({});
    const [weekdays, setWeekdays] = useState<WeekdayPickerReturn>(defaultWeekdays);

    const handleTimeChange = (startTime?: string, endTime?: string) => setTimeRange({ startTime, endTime });

    const handleWeekdayChange = (weekdays?: WeekdayPickerReturn) => setWeekdays(weekdays ?? defaultWeekdays);

    useEffect(() => {
        onChange({
            weekdays,
            timeRange
        });
    }, [timeRange, weekdays]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 4
                }}
            >
                <TimePicker onChange={handleTimeChange}/>
                <WeekdayPicker onChange={handleWeekdayChange}/>
            </Box>
        </LocalizationProvider>
    );
}

export default SchedulePicker;