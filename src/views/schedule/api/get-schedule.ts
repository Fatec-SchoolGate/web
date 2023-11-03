import api from "@/configs/api";
import { ScheduleDto } from "@/views/subject/dto/schedule.dto";
import { useQuery } from "react-query";

interface Response {
    schedule: ScheduleDto;
}

const getSchedule = (scheduleId: string) => api.get<Response>(`/schedules/${scheduleId}`);

export const useSchedule = (scheduleId?: string) => {
    return useQuery(["schedule", scheduleId], () => getSchedule(scheduleId!), {
        enabled: !!scheduleId
    });
}