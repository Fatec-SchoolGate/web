import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

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
            <Button
                variant={"contained"}
                color={"inherit"}
                sx={{
                    minWidth: 0,
                    width: "32px",
                    height: "32px",
                    p: 0
                }}
            >
                <Icon
                    icon={"bi:three-dots"}
                />
            </Button>
        </Box>
    );
}

export default Actions;