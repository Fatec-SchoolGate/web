import { create } from "zustand";

interface AttendancesUsersTableState {
    attendanceDate?: string;
    openModal: (attendanceDate: string) => void;
    closeModal: () => void;
}

export const useAttendancesUsersTable = create<AttendancesUsersTableState>((set) => ({
    openModal: (attendanceDate) => set(() => ({ attendanceDate })),
    closeModal: () => set(() => ({ attendanceDate: undefined }))
}));