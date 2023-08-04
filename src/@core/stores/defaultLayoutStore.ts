import { create } from "zustand";

interface DefaultLayoutState {
    open: boolean;
    setOpen: (open: boolean) => void;
    closeDrawer: () => void;
    openDrawer: () => void;
    drawerWidth: number;
}

export const useDefaultLayoutStore = create<DefaultLayoutState>((set) => ({
    open: false,
    setOpen: (open = true) => set(() => ({ open: open })),
    closeDrawer: () => set(() => ({ open: false })),
    openDrawer: () => set(() => ({ open: true })),
    drawerWidth: 260
}));