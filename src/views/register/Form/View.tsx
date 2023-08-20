import FormImageField from "@/@core/components/form/FormImageField";
import FormTextField from "@/@core/components/form/FormTextField";
import { RegisterDto } from "@/@core/dto/register/registerDto";
import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
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

    const { control, register, handleSubmit, setValue, watch } = form;
    
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
            <Box>
                <Typography
                    variant={"h1"}
                    sx={{ mb: (theme) => theme.spacing(4) }}
                >
                    {t("register")}
                </Typography>
            </Box>
            <FormImageField
                watch={watch}
                setValue={setValue}
                register={register}
                name={"profileImage"}
                width={150}
                height={150}
            />
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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    mt: (theme) => theme.spacing(4)
                }}
            >
                <Typography>{t("alreadyHasAnAccount")}</Typography>
                <Typography
                    component={Link}
                    href={"/login"}
                    sx={{
                        textDecoration: "none",
                        color: (theme) => theme.palette.primary.main
                    }}
                >
                    {t("signInNow")}
                </Typography>
            </Box>
        </Box>
    );
}

export default View;