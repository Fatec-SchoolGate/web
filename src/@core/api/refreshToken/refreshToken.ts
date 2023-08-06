import { useAuthStore } from "@/@core/stores/authStore";
import api from "@/configs/api";
import { useMutation } from "react-query";

const refreshToken = async () => api.post("/auth/refresh-token");

export const useRefreshToken = () => {
    const {
        setLoading
    } = useAuthStore();

    return useMutation(refreshToken, {
        onSuccess: (response) => {
            console.log(response);
            setLoading(false);
        },
        onError: (response) => {
            api.defaults.headers.common.Authorization = "";
            localStorage.clear();
        }
    });
}