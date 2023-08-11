import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import Form from "./Form";
import { useOrganizationStore } from "@/stores/organizations/useForm";

const Header = () => {

    const { t } = useTranslation();
    const { openForm } = useOrganizationStore();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: (theme) => theme.spacing(3)
            }}
        >
            <Typography
                variant={"h4"}
            >
                {t("organizations")}
            </Typography>
            <Button
                onClick={openForm}
                variant={"contained"}
                startIcon={(
                    <Icon
                        icon={"material-symbols:add"}
                    />
                )}
            >
                {t("add")}
            </Button>
            <Form/>
        </Box>
    );
}

export default Header;