import { ScheduleDto } from "@/views/subject/dto/schedule.dto";

export interface InviteDto {
    id: string;
    scheduleId: string;
    schedule?: ScheduleDto;
}