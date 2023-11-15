import { ScheduleDto } from "@/views/subject/dto/schedule.dto";

export const isScheduleOnline = (schedule?: ScheduleDto): boolean => {
    if (!schedule) return false 

    const now = new Date();
    const currentDay = now.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    const currentTime = now.toLocaleTimeString('en-US', { hour12: false });
    
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const today = days[currentDay].toLowerCase();
    
    if (schedule[today as keyof ScheduleDto]) return currentTime >= schedule.startTime && currentTime <= schedule.endTime;
    
    return false;
}