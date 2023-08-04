import { useDefaultLayoutStore } from "@/@core/stores/defaultLayoutStore";
import { useSettingsStore } from "@/@core/stores/settingsStore";
import { Icon } from "@iconify/react";
import { Box, IconButton, Theme, Typography, useMediaQuery } from "@mui/material";

const DrawerHeader = () => {

    const {
        closeDrawer
    } = useDefaultLayoutStore();

    const {
        appTitle
    } = useSettingsStore();

    const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

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
                    variant={"h3"}
                >
                    {appTitle}
                </Typography>
            </Box>
            {hidden && (
                <IconButton
                    onClick={closeDrawer}
                >
                    <Icon
                        icon={"material-symbols:close"}
                    />
                </IconButton>
            )}
        </Box>
    );
}

export default DrawerHeader;