import { ReactNode, useEffect } from "react";
import { useAuthStore } from "../stores/authStore";
import { useRefreshToken } from "../api/refreshToken/refreshToken";
import api from "@/configs/api";
import LoadingSpinner from "../components/ui/loading-spinner";
import { useRouter } from "next/router";
import { DEFAULT_AUTH_ROUTE, DEFAULT_GUEST_ROUTE } from "../constants/routes";

interface Props {
    children: ReactNode;
    authGuard: boolean;
    guestGuard: boolean;
};

const AuthMiddleware = (props: Props) => {
    const {
        children,
        authGuard,
        guestGuard
    } = props;

    const {
        loading,
        setLoading
    } = useAuthStore();

    const { mutate: refreshToken } = useRefreshToken();
    const router = useRouter();
    
    useEffect(() => {
        setLoading(true);
        const accessToken = localStorage.getItem("access_token");
        
        if (accessToken) {
            api.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
            refreshToken(undefined, {
                onSuccess: () => {
                    if (guestGuard) router.replace(DEFAULT_AUTH_ROUTE).then(() => setLoading(false));
                    else setLoading(false);
                }
            });
        } else {
            if (authGuard) router.replace(DEFAULT_GUEST_ROUTE).then(() => setLoading(false));
            else setLoading(false);
        }
    }, []);
    
    if (loading) return null;
    return children;
}

export default AuthMiddleware;