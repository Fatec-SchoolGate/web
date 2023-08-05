import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import FormTextField from "@/@core/components/FormTextField";
import { useTranslation } from "react-i18next";

const View = () => {
    const { control } = useForm();
    const { t } = useTranslation();

    return (
        <Box
            component={"form"}
            sx={{
                m: (theme) => theme.spacing(4),
                display: "flex",
                flexDirection: "column",
                gap: 4
            }}
        >
            <FormTextField
                control={control}
                label={t("Nome") ?? ""}
                name={"name"}
            />
            <FormTextField
                control={control}
                label={t("Nome") ?? ""}
                name={"name"}
            />
            <FormTextField
                control={control}
                label={t("Nome") ?? ""}
                name={"name"}
            />
        </Box>
    );
}

export default View;