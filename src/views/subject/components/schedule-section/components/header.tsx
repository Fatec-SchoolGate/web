import { useClassStore } from "@/views/subject/store";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import Form from "./form";

const Header = () => {
    const { t } = useTranslation();

    const { openForm } = useClassStore();

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
                onClick={openForm}
            >
                {t("add")}
            </Button>
            <Form/>
        </Box>
    );
}

export default Header;