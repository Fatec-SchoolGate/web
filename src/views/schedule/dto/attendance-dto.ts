import { UserDto } from "@/@core/dto/userDto";
import { ScheduleDto } from "@/views/subject/dto/schedule.dto";

export interface AttendanceDto {
    id: string;
    userId: string;
    user?: UserDto;
    scheduleId: string;
    schedule?: ScheduleDto;
    authMode: string;
    attendanceDate: Date;
    weekDayIndex: number;
}