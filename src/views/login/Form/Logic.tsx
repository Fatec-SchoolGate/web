import { useForm } from "react-hook-form";
import { LoginDto } from "@/@core/dto/login/loginDto";
import View from "./View";

interface Props {
    defaultValues: LoginDto;
    onSubmit: (data: LoginDto) => void;
}

const Logic = (props: Props) => {
    const {
        defaultValues,
        onSubmit
    } = props;

    const form = useForm<LoginDto>({
        defaultValues: defaultValues
    });

    const handleSubmit = async (data: LoginDto) => {
        await onSubmit(data);
    }

    return (
        <View
            form={form}
            onSubmit={handleSubmit}
        />
    );
}

export default Logic;