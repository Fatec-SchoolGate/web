import { Box, Typography } from '@mui/material';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import dayjs, { Dayjs } from "dayjs";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TimePicker = () => {
    const [startTime, setStartTime] = useState<Dayjs | null>(dayjs("2003-07-19T19:00"));
    const [endTime, setEndTime] = useState<Dayjs | null>(dayjs("2003-07-19T20:40"));
    
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                gap: 4
            }}
        >
            <Box>
                <Typography textAlign={"center"}>{t("startTime")}</Typography>
                <MultiSectionDigitalClock
                    ampm={false}
                    onChange={(value) => setStartTime(value)}
                    value={startTime}
                    sx={{
                        height: 85,
                        width: "fit-content"
                    }}
                />
            </Box>
            <Box>
                <Typography textAlign={"center"}>{t("endTime")}</Typography>
                <MultiSectionDigitalClock
                    ampm={false}
                    onChange={(value) => setEndTime(value)}
                    value={endTime}
                    sx={{
                        height: 85,
                        width: "fit-content"
                    }}
                />
            </Box>
        </Box>
    );
}

export default TimePicker;