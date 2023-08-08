import FormTextField from "@/@core/components/form/FormTextField";
import { RegisterDto } from "@/@core/dto/register/registerDto";
import { Box, Button } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";

interface Props {
    form: UseFormReturn<RegisterDto>;
    onSubmit: (data: RegisterDto) => void;
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
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                width: 450,
                m: (theme) => theme.spacing(4),
            }}
        >
            <FormTextField
                control={control}
                name={"name"}
                label={t("name")}
            />
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
                variant={"contained"}
            >
                {t("register")}
            </Button>
        </Box>
    );
}

export default View;