import { create } from "zustand";
import { UserDto } from "../dto/userDto";
import api from "@/configs/api";

interface AuthState {
    accessToken: string | null;
    setLoginData: (accessToken: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    authed: boolean;
    user?: UserDto;
    setUser: (userDto: UserDto) => void;
    logout: () => void;
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
    setLoading: (loading) => set(() => ({ loading })),
    setUser: (user) => set(() => ({ user })),
    logout: () => {
        localStorage.clear();
        api.defaults.headers.common.Authorization = ``;
        set({
            accessToken: null,
            authed: false
        });
    }
}));