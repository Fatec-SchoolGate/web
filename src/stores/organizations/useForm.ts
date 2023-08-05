import { create } from "zustand";

interface FormState {
    open: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
}

export const useFormStore = create<FormState>((set) => ({
    open: true,
    openDrawer: () => set(() => ({ open: true })),
    closeDrawer: () => set(() => ({ open: false })),
}));