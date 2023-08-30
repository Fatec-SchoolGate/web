import { Box, Button } from "@mui/material";
import { UseFormReturn } from "react-hook-form";
import { useTranslation } from "react-i18next";
import FormTextField from "@/@core/components/form/FormTextField";
import { OrganizationDto } from "@/@core/dto/organizationDto";
import StickyLinearProgress from "@/@core/components/ui/StickyLinearProgress";
import { useIsCreatingSubject } from "../../../api/createSubject";
import { useIsUpdatingSubject } from "../../../api/updateSubject";
import { useSubjectSectionStore } from "../../../store";

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
    const isCreating = useIsCreatingSubject();
    const isUpdating = useIsUpdatingSubject();
    const isLoading = isCreating || isUpdating;

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
            <StickyLinearProgress isLoading={isLoading}/>
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
                    disabled={isLoading}
                    type={"submit"}
                    variant={"contained"}
                >
                    {t("save")}
                </Button>
                <Button
                    disabled={isLoading}
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
