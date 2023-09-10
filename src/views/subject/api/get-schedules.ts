import api from "@/configs/api";
import { ScheduleDto } from "../dto/schedule.dto";
import { useQuery } from "react-query";

interface Response {
    schedules: ScheduleDto[]
} 

const getSchedules = (subjectId: string) => api.get<Response>(`schedules`, {
    params: { subjectId }
});

export const useSchedules = (subjectId: string) => useQuery(["schedules", subjectId], () => getSchedules(subjectId), { enabled: !!subjectId });