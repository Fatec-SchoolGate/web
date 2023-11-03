import { SubjectDto } from "@/views/organization/components/SubjectSection/dto/subjectDto";

export interface ScheduleDto {
    id: string;
    subjectId: string;
    name: string;
    description: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
    startTime: string;
    endTime: string;
    createdAt: string;
    updatedAt: string;
    subject?: SubjectDto;
}