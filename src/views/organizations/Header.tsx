import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";

const Header = () => {

    const { t } = useTranslation();

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
                variant={"contained"}
                startIcon={(
                    <Icon
                        icon={"material-symbols:add"}
                    />
                )}
            >
                {t("add")}
            </Button>
        </Box>
    );
}

export default Header;