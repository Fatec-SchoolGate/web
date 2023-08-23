import { create } from "zustand";

interface OrganizationPageState {
    isFormOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
}

export const useOrganizationPageStore = create<OrganizationPageState>((set) => ({
    isFormOpen: false,
    openForm: () => set(() => ({ isFormOpen: true })),
    closeForm: () => set(() => ({ isFormOpen: false }))
}));