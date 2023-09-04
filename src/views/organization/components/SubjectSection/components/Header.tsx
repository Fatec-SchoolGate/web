import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSubjectSectionStore } from "../store";

const Header = () => {
    const { t } = useTranslation();
    const { openForm } = useSubjectSectionStore();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between"
            }}
        >
            <Typography variant={"h4"}>{t("subject")}</Typography>
            <Button
                variant={"contained"}
                onClick={openForm}
            >
                {t("add")}
            </Button>
        </Box>
    );
}

export default Header;