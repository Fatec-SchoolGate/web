import { create } from "zustand";

interface AuthState {
    accessToken: string | null;
    setLoginData: (accessToken: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    accessToken: null,
    setLoginData: (accessToken) => {
        set(() => ({
            accessToken
        }));
    },
    loading: true,
    setLoading: (loading) => set(() => ({ loading }))
}));