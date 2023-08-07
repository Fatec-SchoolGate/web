import { ReactNode } from "react";
import { useAuthStore } from "../stores/authStore";
import { DEFAULT_AUTH_ROUTE, DEFAULT_GUEST_ROUTE } from "../constants/routes";
import { useRouter } from "next/router";

interface Props {
    children: ReactNode;
    authGuard: boolean;
    guestGuard: boolean;
};

const GuestMiddleware = (props: Props) => {
    const {
        children,
        authGuard,
        guestGuard
    } = props;

    const {
        authed
    } = useAuthStore();

    const router = useRouter();

    if (!authed && authGuard) {
        router.replace(DEFAULT_GUEST_ROUTE);
        return <></>;
    } else if (authed && guestGuard) {
        router.replace(DEFAULT_AUTH_ROUTE);
        return <></>;
    } else {
        return children;
    }
}

export default GuestMiddleware;