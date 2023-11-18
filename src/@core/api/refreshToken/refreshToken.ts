import { useAuthStore } from "@/@core/stores/authStore";
import { useMutation } from "react-query";
import { useRouter } from "next/router";
import { DEFAULT_GUEST_ROUTE } from "@/@core/constants/routes";
import { JwtTokenDecodedDto } from "@/@core/dto/jwtTokenDto";
import jwt from "jwt-decode";
import api from "@/configs/api";

const refreshToken = async () => await api.post("/auth/refresh-token");

export const useRefreshToken = () => {
    const {
        setLoading,
        setLoginData,
        setUser
    } = useAuthStore();

    const router = useRouter();

    return useMutation(refreshToken, {
        onSuccess: () => {
            const token = localStorage.getItem("access_token");
            if (!token) throw new Error();

            const decodedToken = jwt<JwtTokenDecodedDto>(token);
            const user = decodedToken?.user;
            setUser(user);
            setLoginData(token);
        },
        onError: (response) => {
            api.defaults.headers.common.Authorization = "";
            localStorage.clear();
            router.replace(DEFAULT_GUEST_ROUTE).then(() => setLoading(false));
        }
    });
}