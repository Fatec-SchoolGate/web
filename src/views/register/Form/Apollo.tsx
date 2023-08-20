import { RegisterDto } from "@/@core/dto/register/registerDto";
import Logic from "./Logic";

const Apollo = () => {
    const defaultValues: RegisterDto = {
        profileImage: null,
        name: "",
        email: "",
        password: ""
    }

    return (
        <Logic
            defaultValues={defaultValues}
        />
    );
}

export default Apollo;