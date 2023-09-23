import { create } from "zustand";

interface ScheduleStates {
    qrCodeModal: boolean;
    scheduleId?: string;
    openQrCodeModal: (scheduleId: string) => void;
    closeQrCodeModal: () => void;
}

export const useScheduleStore = create<ScheduleStates>((set) => ({
    qrCodeModal: false,
    openQrCodeModal: (scheduleId) => set(() => ({ qrCodeModal: true, scheduleId })),
    closeQrCodeModal: () => set(() => ({ qrCodeModal: false, scheduleId: undefined })),
}));