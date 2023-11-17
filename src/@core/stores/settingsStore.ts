import { create } from "zustand";

interface SettingsState {
    mode: "light" | "dark";
    toggleThemeMode: () => void;
    appTitle: string;
}

export const useSettingsStore = create<SettingsState>((set) => ({
    mode: "dark",
    toggleThemeMode: () => set((store) => ({ mode: store.mode === "light" ? "dark" : "light" })),
    appTitle: "Presence"
}));