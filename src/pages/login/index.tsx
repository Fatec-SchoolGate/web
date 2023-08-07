import { ReactNode } from "react";
import LoginContainer from "@/views/login";

const LoginPage = () => {
    return (
        <LoginContainer/>
    );
}

LoginPage.getLayout = (page: ReactNode) => <div>{page}</div>;
LoginPage.authGuard = false;
LoginPage.guestGuard = true;

export default LoginPage;