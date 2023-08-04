import { useSettingsStore } from "@/@core/stores/settingsStore";
import { Icon } from "@iconify/react";
import { Box, Typography } from "@mui/material";

const DrawerHeader = () => {
    const {
        appTitle
    } = useSettingsStore();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 5
            }}
        >
            <Box>
                <Typography
                    variant={"h1"}
                >
                    {appTitle}
                </Typography>
            </Box>
            <Icon
                icon={"material-symbols:close"}
            />
        </Box>
    );
}

export default DrawerHeader;