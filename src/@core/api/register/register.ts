import { RegisterDto } from "@/@core/dto/register/registerDto";
import { useAuthStore } from "@/@core/stores/authStore";
import api from "@/configs/api";
import { useMutation } from "react-query";

interface RegisterResponse {
    user: unknown;
    success: boolean;
    accessToken: string;
}

const register = (registerDto: RegisterDto) => api.put<RegisterResponse>("/auth/register", registerDto);

export const useRegister = () => {
    const {
        setLoginData
    } = useAuthStore();

    return useMutation(register, {
        onSuccess: (response) => {
            const {
                data,
                status
            } = response;
            
            setLoginData(data.accessToken);
            localStorage.setItem("access_token", data.accessToken);
            api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
        }
    });
}