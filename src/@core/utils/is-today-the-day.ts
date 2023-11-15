export type DayLabel = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday" | "friday" | "saturday";

const days: DayLabel[] = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

export const isTodayTheDay = (day: DayLabel) => {
    const now = new Date();
    const currentDay = now.getDay();
    const dayLabel = days[currentDay];

    return day === dayLabel;
}