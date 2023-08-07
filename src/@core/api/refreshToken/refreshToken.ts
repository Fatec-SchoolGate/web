import { useAuthStore } from "@/@core/stores/authStore";
import { useMutation } from "react-query";
import api from "@/configs/api";
import { useRouter } from "next/router";
import { DEFAULT_GUEST_ROUTE } from "@/@core/constants/routes";

const refreshToken = async () => api.post("/auth/refresh-token");

export const useRefreshToken = () => {
    const {
        setLoading,
        setLoginData
    } = useAuthStore();

    const router = useRouter();

    return useMutation(refreshToken, {
        onSuccess: (response) => {
            setLoginData(localStorage.getItem("access_token") ?? "");
        },
        onError: (response) => {
            api.defaults.headers.common.Authorization = "";
            localStorage.clear();
            router.replace(DEFAULT_GUEST_ROUTE).then(() => setLoading(false));
        }
    });
}