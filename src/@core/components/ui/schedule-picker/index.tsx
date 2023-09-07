import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TimePicker from "./time-picker";
import WeekdayPicker from "./week-day-picker";

const SchedulePicker = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                    gap: 4,
                    p: (theme) => theme.spacing(4)
                }}
            >
                <TimePicker/>
                <WeekdayPicker/>
            </Box>
        </LocalizationProvider>
    );
}

export default SchedulePicker;