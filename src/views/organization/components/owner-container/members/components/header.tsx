import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Form from "./form";
import { useMembersSection } from "../store";

const Header = () => {
    const { t } = useTranslation();

    const { openForm } = useMembersSection();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
            }}
        >
            <Button
                variant={"contained"}
                onClick={openForm}
            >
                {t("add")}
            </Button>
            <Form/>
        </Box>
    );
}

export default Header;