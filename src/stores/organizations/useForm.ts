import { create } from "zustand";

interface OrganizationState {
    formOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
}

export const useOrganizationStore = create<OrganizationState>((set) => ({
    formOpen: false,
    openForm: () => set(() => ({ formOpen: true })),
    closeForm: () => set(() => ({ formOpen: false })),
}));