import { ReactNode } from "react";
import AuthMiddleware from "./AuthMiddleware";

interface Props {
    children: ReactNode;
};

const Middlewares = ({ children }: Props) => {
    return (
        <AuthMiddleware>
            {children}
        </AuthMiddleware>
    );
}

export default Middlewares;