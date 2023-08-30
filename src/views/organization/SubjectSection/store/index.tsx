import { create } from "zustand";

interface SubjectSectionState {
    subjectId?: string;
    isFormOpen: boolean;
    isEditing: boolean;
    openForm: () => void;
    openFormEdit: (subjectId: string) => void;
    closeForm: () => void;
}

export const useSubjectSectionStore = create<SubjectSectionState>((set) => ({
    isFormOpen: false,
    isEditing: false,
    openForm: () => set(() => ({ isFormOpen: true })),
    openFormEdit: (subjectId: string) => set(() => ({ subjectId, isFormOpen: true, isEditing: true })),
    closeForm: () => set(() => ({ isFormOpen: false, subjectId: undefined, isEditing: false }))
}));
