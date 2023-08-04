import { create } from "zustand";

interface DefaultLayoutState {
    open: boolean;
    setOpen: (open: boolean) => void;
    drawerWidth: number;
}

export const useDefaultLayoutStore = create<DefaultLayoutState>((set) => ({
    open: false,
    setOpen: (open = true) => set(() => ({ open: open })),
    drawerWidth: 260
}));