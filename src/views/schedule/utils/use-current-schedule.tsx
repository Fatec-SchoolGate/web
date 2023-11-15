import { useSchedule } from "../api/get-schedule";
import { useScheduleId } from "./use-schedule-id";

export const useCurrentSchedule = () => {
    const scheduleId = useScheduleId();
    const { data: response, isLoading } = useSchedule(scheduleId);
    const schedule = response?.data.schedule;

    return { schedule, isLoading };
}