import { create } from "zustand";

interface AuthState {
    accessToken: string | null;
    setLoginData: (accessToken: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    authed: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
    authed: false,
    accessToken: null,
    setLoginData: (accessToken) => {
        set(() => ({
            accessToken,
            authed: true
        }));
    },
    loading: true,
    setLoading: (loading) => set(() => ({ loading }))
}));