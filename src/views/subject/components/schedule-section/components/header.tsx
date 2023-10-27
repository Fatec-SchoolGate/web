import { useClassStore } from "@/views/subject/store";
import { Box, Button, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Form from "./form";

const Header = () => {
    const { t } = useTranslation();

    const { openForm } = useClassStore();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                p: 4
            }}
        >
            <Typography variant={"h4"}>
                {t("classesTimes")}
            </Typography>
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