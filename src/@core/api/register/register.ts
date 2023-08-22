import { RegisterDto } from "@/@core/dto/register/registerDto";
import { useAuthStore } from "@/@core/stores/authStore";
import { useMutation } from "react-query";
import jwt from "jwt-decode";
import api from "@/configs/api";
import { JwtTokenDecodedDto } from "@/@core/dto/jwtTokenDto";
import { UserDto } from "@/@core/dto/userDto";

interface RegisterResponse {
    user: UserDto;
    success: boolean;
    accessToken: string;
}

const register = (registerDto: RegisterDto) => {
    const formData = new FormData();
    formData.append("name", registerDto.name);
    formData.append("email", registerDto.email);
    formData.append("password", registerDto.password);
    formData.append("profileImage", registerDto.profileImage!);

    return api.put<RegisterResponse>("/auth/register", registerDto, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    });
}

export const useRegister = () => {
    const {
        setLoginData,
        setUser
    } = useAuthStore();

    return useMutation(register, {
        onSuccess: (response) => {
            const {
                data,
                status
            } = response;
            const decodedToken = jwt<JwtTokenDecodedDto>(data.accessToken);
            const user = decodedToken?.user;
            setUser(user);
            setLoginData(data.accessToken);
            localStorage.setItem("access_token", data.accessToken);
            api.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`;
        }
    });
}