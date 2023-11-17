import { ScheduleDto } from "@/views/subject/dto/schedule.dto";

export interface OrganizationDto {
    id?: string;
    name: string;
    code?: string;
    address?: string;
    description?: string;
    createdAt?: string;
    updatedAt?: string;
    userRole?: "member" | "manager" | "owner";
    schedules?: ScheduleDto[];
    organizationUsers?: {
        id: string;
    }[]
}