import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const Header = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: (theme) => theme.spacing(4)
            }}
        >
            <Button
                variant={"contained"}
            >
                {t("add")}
            </Button>
        </Box>
    );
}

export default Header;