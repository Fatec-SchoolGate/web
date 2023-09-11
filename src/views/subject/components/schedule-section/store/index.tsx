import { create } from "zustand";

interface ScheduleStates {
    qrCodeModal: boolean;
    openQrCodeModal: () => void;
    closeQrCodeModal: () => void;
}

export const useScheduleStore = create<ScheduleStates>((set) => ({
    qrCodeModal: false,
    openQrCodeModal: () => set(() => ({ qrCodeModal: true })),
    closeQrCodeModal: () => set(() => ({ qrCodeModal: false })),
}));