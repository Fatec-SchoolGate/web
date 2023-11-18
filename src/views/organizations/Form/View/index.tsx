import { Box, Typography } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormTextField from "@/@core/components/form/FormTextField";
import { OrganizationDto } from "@/@core/dto/organizationDto";
import Submit from "./Submit";

interface Props {
    form: UseFormReturn<OrganizationDto>;
    onSubmit: (data: OrganizationDto) => void;
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
                m: (theme) => theme.spacing(4),
                display: "flex",
                flexDirection: "column",
                gap: 4,
                position: "relative"
            }}
        >
            <Typography variant={"h4"}>{t("newOrganization")}</Typography>
            <FormTextField
                control={control}
                label={t("name") ?? ""}
                name={"name"}
            />
            <FormTextField
                control={control}
                label={t("address") ?? ""}
                name={"address"}
            />
            <FormTextField
                control={control}
                label={t("description") ?? ""}
                name={"description"}
                multiline
                rows={3}
            />
            
            <Submit/>
        </Box>
    );
}

export default View;