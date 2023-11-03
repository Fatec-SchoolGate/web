import api from "@/configs/api";
import { AttendanceDto } from "../dto/attendance-dto";
import { useQuery } from "react-query";
import { UserDto } from "@/@core/dto/userDto";

interface Response {
    groupedAttendances: {
        [key: string]: {
            attendances: AttendanceDto[];
            users: (UserDto & { attendedAt: string })[];
        }
    }
}

const getScheduleGroupedAttendances = (scheduleId: string) => api.get<Response>(`schedules/${scheduleId}/grouped-attendances`);

export const useScheduleGroupedAttendances = (scheduleId?: string) => {
    return useQuery(["schedule-grouped-attendances", scheduleId], () => getScheduleGroupedAttendances(scheduleId!), {
        enabled: !!scheduleId
    });
}