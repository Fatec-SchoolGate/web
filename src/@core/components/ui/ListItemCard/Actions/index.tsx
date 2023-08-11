import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ThreeDotsButton from "./ThreeDotsButton";

const Actions = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3
            }}
        >
            <Button
                variant={"contained"}
                color={"inherit"}
                startIcon={(
                    <Icon
                        icon={"mdi:eye-outline"}
                    />
                )}
            >
                {t("preview")}
            </Button>
            <ThreeDotsButton/>
        </Box>
    );
}

export default Actions;