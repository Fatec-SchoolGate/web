import FormTextField from "@/@core/components/form/FormTextField";
import { LoginDto } from "@/@core/dto/login/loginDto";
import { Box, Button, Checkbox, Typography } from "@mui/material";
import Link from "next/link";
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
                name={"email"}
                label={t("email")}
            />
            <FormTextField
                control={control}
                name={"password"}
                label={t("password")}
                type={"password"}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center"
                    }}
                >
                    <Checkbox/>
                    <Typography>Remember me</Typography>
                </Box>
                <Box>
                    <Typography
                        component={Link}
                        href={"forgot-password"}
                        sx={{
                            textDecoration: "none",
                            color: (theme) => theme.palette.primary.main
                        }}
                    >
                        Forgot password?
                    </Typography>
                </Box>
            </Box>
            <Button
                type={"submit"}
                variant={"contained"}
            >
                Login
            </Button>
        </Box>
    );
}

export default View;