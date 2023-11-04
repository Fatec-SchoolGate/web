import { create } from "zustand";

interface LoadingComponentState {
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useLoadingComponent = create<LoadingComponentState>((set) => ({
    loading: true,
    setLoading: (loading) => set({ loading })
}));