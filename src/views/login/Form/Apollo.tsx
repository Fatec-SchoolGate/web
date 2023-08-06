import { useLogin } from "@/@core/api/login/login";
import { LoginDto } from "@/@core/dto/login/loginDto";
import Logic from "./Logic";

const Apollo = () => {
    const { mutate: login } = useLogin();

    const handleSubmit = async (data: LoginDto) => {
        login(data);
    } 

    const defaultValues = {
        email: "",
        password: ""
    }

    return (
        <Logic
            onSubmit={handleSubmit}
            defaultValues={defaultValues}
        />
    );
}

export default Apollo;