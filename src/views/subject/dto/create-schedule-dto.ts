export interface CreateScheduleDto {
    startTime?: string;
    endTime?: string;
    subjectId: string;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    sunday: boolean;
}