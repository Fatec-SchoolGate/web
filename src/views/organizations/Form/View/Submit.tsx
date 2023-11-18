import { useIsCreatingOrganization } from "@/@core/api/organizations/createOrganization";
import { useOrganizationStore } from "@/stores/organizations/useOrganization";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Submit = () => {
    const { t } = useTranslation();
    const isLoading = useIsCreatingOrganization();
    
    const { closeForm } = useOrganizationStore();

    return (
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
                {t("add")}
            </Button>
            <Button
                disabled={isLoading}
                variant={"outlined"}
                onClick={closeForm}
            >
                {t("cancel")}
            </Button>
        </Box>
    );
}

export default Submit;
