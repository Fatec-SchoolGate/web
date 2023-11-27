import { LoginDto } from "@/@core/dto/login/loginDto";
import { useMutation } from "react-query";
import api from "@/configs/api";
import { useAuthStore } from "@/@core/stores/authStore";
import jwt from "jwt-decode";
import { JwtTokenDecodedDto } from "@/@core/dto/jwtTokenDto";

interface LoginResponse {
    access_token: string;
}

const login = async (data: LoginDto) => await api.post<LoginResponse>("/auth/signIn", data);

export const useLogin = () => {
    const {
        setLoginData,
        setUser
    } = useAuthStore();

    return useMutation(login, {
        onSuccess: (response) => {
            const {
                data,
                status
            } = response;
            
            setLoginData(data.access_token);
            localStorage.setItem("access_token", data.access_token);
            api.defaults.headers.common.Authorization = `Bearer ${data.access_token}`;

            const decodedToken = jwt<JwtTokenDecodedDto>(data.access_token);
            const user = decodedToken?.user;
            setUser(user);
        }
    })
}