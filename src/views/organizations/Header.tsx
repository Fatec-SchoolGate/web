import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import Form from "./Form";
import { useFormStore } from "@/stores/organizations/useForm";

const Header = () => {

    const { t } = useTranslation();
    const { openDrawer } = useFormStore();

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
                onClick={openDrawer}
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