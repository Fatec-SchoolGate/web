import { Box, Button } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormTextField from "@/@core/components/form/FormTextField";
import { OrganizationDto } from "@/@core/dto/organizationDto";

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
                gap: 4
            }}
        >
            <FormTextField
                control={control}
                label={t("name") ?? ""}
                name={"name"}
            />
            <FormTextField
                control={control}
                label={t("description") ?? ""}
                name={"description"}
                multiline
                rows={3}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 4
                }}
            >
                <Button
                    type={"submit"}
                    variant={"contained"}
                >
                    {t("add")}
                </Button>
                <Button
                    variant={"outlined"}
                    color={"secondary"}
                >
                    {t("cancel")}
                </Button>
            </Box>
        </Box>
    );
}

export default View;