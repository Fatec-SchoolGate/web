import { create } from "zustand";
import { UserDto } from "../dto/userDto";

interface AuthState {
    accessToken: string | null;
    setLoginData: (accessToken: string) => void;
    loading: boolean;
    setLoading: (loading: boolean) => void;
    authed: boolean;
    user?: UserDto;
    setUser: (userDto: UserDto) => void;
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
    setUser: (user) => set(() => ({ user }))
}));