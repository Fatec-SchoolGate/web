import { ReactNode, useEffect } from "react";
import { useAuthStore } from "../stores/authStore";
import { useRefreshToken } from "../api/refreshToken/refreshToken";
import api from "@/configs/api";

interface Props {
    children: ReactNode
};

const AuthMiddleware = (props: Props) => {
    const {
        children
    } = props;

    const {
        loading,
        setLoading
    } = useAuthStore();

    const { mutate: refreshToken } = useRefreshToken();

    useEffect(() => {
        setLoading(true);

        const accessToken = localStorage.getItem("access_token");
        
        if (accessToken) {
            api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            refreshToken();
        } else {
            setLoading(false);
            //TODO send user to login
        }
    }, []);
    
    if (loading) return <>loading</>

    return <>{children}</>;
}

export default AuthMiddleware;