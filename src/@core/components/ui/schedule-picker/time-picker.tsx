import { Box, Typography } from '@mui/material';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    onChange: (startTime?: string, endTime?: string) => void;
}

const TimePicker = (props: Props) => {

    const { onChange } = props;

    const [startTime, setStartTime] = useState<Dayjs | null>(dayjs("2003-07-19T19:00"));
    const [endTime, setEndTime] = useState<Dayjs | null>(dayjs("2003-07-19T20:40"));
    
    const { t } = useTranslation();

    const handleStartTime = (value: Dayjs | null) => setStartTime(value);

    const handleEndTime = (value: Dayjs | null) => setEndTime(value);

    useEffect(() => onChange(startTime?.format("HH:mm"), endTime?.format("HH:mm")), [startTime, endTime]);

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
                    onChange={handleStartTime}
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
                    onChange={handleEndTime}
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