import api from "@/configs/api";
import { useMutation } from "react-query";

const confirmAttendance = (attendanceToken: string) => api.post(`attendances/confirm-attendance`, {
    attendanceToken
});

export const useConfirmAttendance = () => {
    return useMutation(confirmAttendance);
}