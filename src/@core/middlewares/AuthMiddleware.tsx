import { ReactNode } from "react";

interface Props {
    children: ReactNode
};

const AuthMiddleware = (props: Props) => {

    const {
        children
    } = props;

    return <>{children}</>;

}

export default AuthMiddleware;