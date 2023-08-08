import RegisterContainer from "@/views/register";
import { ReactNode } from "react";

const RegisterPage = () => {
    return (
        <RegisterContainer/>
    );
}

RegisterPage.authGuard = false;
RegisterPage.guestGuard = true;
RegisterPage.getLayout = (page: ReactNode) => page;

export default RegisterPage;