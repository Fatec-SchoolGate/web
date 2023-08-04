import { create } from "zustand";

interface SettingsState {
    mode: "light" | "dark";
    appTitle: string;
}

export const useSettingsStore = create<SettingsState>((set) => ({
    mode: "dark",
    appTitle: "SchoolGate"
}));