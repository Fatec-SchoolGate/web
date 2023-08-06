import FormTextField from "@/@core/components/form/FormTextField";
import { LoginDto } from "@/@core/dto/login/loginDto";
import { Box, Button } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props {
    form: UseFormReturn<LoginDto>;
    onSubmit: (data: LoginDto) => void;
}

const View = (props: Props) => {

    const {
        form,
        onSubmit
    } = props;

    const { control, handleSubmit } = form;

    const { t } = useTranslation();

    return (
        <Box
            component={"form"}
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormTextField
                control={control}
                name={"email"}
                label={t("email")}
            />
            <FormTextField
                control={control}
                name={"password"}
                label={t("password")}
                type={"password"}
            />
            <Button
                type={"submit"}
            >
                login
            </Button>
        </Box>
    );
}

export default View;