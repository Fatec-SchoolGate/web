import { create } from "zustand";

interface MembersSectionState {
    formOpen: boolean;
    openForm: () => void;
    closeForm: () => void;
}

export const useMembersSection = create<MembersSectionState>((set) => ({
    formOpen: false,
    openForm: () => set(() => ({ formOpen: true })),
    closeForm: () => set(() => ({ formOpen: false }))
}));