import { ReactNode } from "react";
import AuthMiddleware from "./AuthMiddleware";
import GuestMiddleware from "./GuestMiddleware";

interface Props {
    children: ReactNode;
    authGuard: boolean;
    guestGuard: boolean;
};

const Middlewares = ({ children, authGuard, guestGuard }: Props) => {
    return (
        <AuthMiddleware
            authGuard={authGuard}
            guestGuard={guestGuard}
        >
            <GuestMiddleware
                authGuard={authGuard}
                guestGuard={guestGuard}
            >
                {children}
            </GuestMiddleware>
        </AuthMiddleware>
    );
}

export default Middlewares;