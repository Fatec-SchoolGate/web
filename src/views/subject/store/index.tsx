import { create } from "zustand";

interface ClassState {
    formOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
}

export const useClassStore = create<ClassState>((set) => ({
    formOpen: false,
    openForm: () => set(() => ({ formOpen: true })),
    closeForm: () => set(() => ({ formOpen: false })),
}));