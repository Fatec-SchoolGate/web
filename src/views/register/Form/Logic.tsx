import { useRegister } from "@/@core/api/register/register";
import { DEFAULT_AUTH_ROUTE } from "@/@core/constants/routes";
import { RegisterDto } from "@/@core/dto/register/registerDto";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { object, string } from "yup";
import View from "./View";

const schema = object().shape({
    name: string().required("enterName"),
    email: string().email("needsToBeEmail").required("enterEmail"),
    password: string().min(8, "minOf8").max(255, "maxOf255").required("enterPassword")
})

interface Props {
    defaultValues: RegisterDto;
}

const Logic = (props: Props) => {
    const {
        defaultValues
    } = props;

    const { mutate: register, isLoading } = useRegister();
    const { t } = useTranslation();
    const router = useRouter();

    const form = useForm<RegisterDto>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (registerDto: RegisterDto) => {
        if (isLoading) return;
        register(registerDto, {
            onSuccess: () => {
                toast.success(t("registerSuccessful"));
                router.replace(DEFAULT_AUTH_ROUTE);
            },
            onError: (error) => {
                if (error instanceof AxiosError && error.response?.status === 401) {
                    // form.setError("email", {
                    //     type: "custom",
                    //     message: "unauthorizedLogin"
                    // });
                }
            }
        });
    }

    return (
        <View
            form={form}
            onSubmit={handleSubmit}
        />
    );
}

export default Logic;