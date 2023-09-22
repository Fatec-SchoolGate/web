import SchedulePicker, { SchedulePickerReturn } from "@/@core/components/ui/schedule-picker";
import { useScheduleClass } from "@/views/subject/api/create-schedule";
import { useSchedules } from "@/views/subject/api/get-schedules";
import { CreateScheduleDto as CreateScheduleDto } from "@/views/subject/dto/create-schedule-dto";
import { useClassStore } from "@/views/subject/store";
import { Box, Button, Dialog, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

const Form = () => {

    const { formOpen, closeForm } = useClassStore();
    const [schedule, setSchedule] = useState<SchedulePickerReturn | null>(null);
    const { t } = useTranslation();

    const router = useRouter();
    const { subjectId } = router.query;

    const { mutateAsync: createSchedule } = useScheduleClass();
    const { refetch } = useSchedules(subjectId as string);

    const onSubmit = () => {
        if (schedule == null || !subjectId) return;

        const createScheduleDto: CreateScheduleDto = {
            ...schedule?.timeRange,
            ...schedule?.weekdays,
            subjectId: subjectId as string
        };

        toast.promise(createSchedule(createScheduleDto, {
            onSuccess: () => {
                closeForm();
                refetch();
            }
        }), {
            success: t("createScheduleSuccess"),
            error: t("createScheduleError"),
            loading: t("createScheduleLoading")
        });
    }

    return (
        <Dialog
            open={formOpen}
            onClose={closeForm}
        >
            <Box
                sx={{
                    p: (theme) => theme.spacing(4)
                }}
            >
                <SchedulePicker
                    onChange={setSchedule}
                />
                <TextField
                    label={"Tag"}
                    placeholder={"Tag"}
                    fullWidth
                    variant={"standard"}
                />
                <Button
                    variant={"contained"}
                    onClick={onSubmit}
                >
                    Adicionar
                </Button>
            </Box>
        </Dialog>
    );
}

export default Form;