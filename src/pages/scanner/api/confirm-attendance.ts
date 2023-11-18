import api from "@/configs/api";
import { useMutation } from "react-query";

const confirmAttendance = async (attendanceToken: string) => await api.post(`attendances/confirm-attendance`, {
    attendanceToken
});

export const useConfirmAttendance = () => {
    return useMutation(confirmAttendance);
}