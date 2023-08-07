import { useForm } from "react-hook-form";
import { LoginDto } from "@/@core/dto/login/loginDto";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import View from "./View";
import { useLogin } from "@/@core/api/login/login";
import { AxiosError } from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { DEFAULT_AUTH_ROUTE } from "@/@core/constants/routes";

const schema = object().shape({
    email: string().email("needsToBeEmail").required("enterEmail"),
    password: string().min(8, "minOf8").max(255, "maxOf255").required("enterPassword")
})

interface Props {
    defaultValues: LoginDto;
    onSubmit: (data: LoginDto) => void;
}

const Logic = (props: Props) => {
    const {
        defaultValues
    } = props;

    const { mutate: login } = useLogin();
    const { t } = useTranslation();
    const router = useRouter();

    const form = useForm<LoginDto>({
        defaultValues: defaultValues,
        resolver: yupResolver(schema)
    });

    const handleSubmit = async (loginDto: LoginDto) => {
        login(loginDto, {
            onSuccess: () => {
                toast.success(t("loginSuccessful"));
                router.replace(DEFAULT_AUTH_ROUTE);
            },
            onError: (error) => {
                if (error instanceof AxiosError && error.response?.status === 401) {
                    form.setError("email", {
                        type: "custom",
                        message: "unauthorizedLogin"
                    });
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