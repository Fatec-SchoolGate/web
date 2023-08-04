import { Avatar, Box, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useSettingsStore } from "@/@core/stores/settingsStore";
import ActionLanguage from "./ActionLanguage";

const AppBarActions = () => {
    const {
        mode,
        toggleThemeMode
    } = useSettingsStore();

    return (
        <Box
            sx={{
                flex: 1,
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
            }}
        >
            <ActionLanguage/>
            <IconButton
                onClick={toggleThemeMode}
            >
                <Icon
                    icon={mode === "dark" ? "material-symbols:dark-mode-outline" : "material-symbols:light-mode-outline"}
                />
            </IconButton>
            <IconButton>
                <Icon
                    icon={"uil:create-dashboard"}
                />
            </IconButton>
            <IconButton>
                <Icon
                    icon={"mi:notification"}
                />
            </IconButton>
            <IconButton>
                <Avatar>GR</Avatar>
            </IconButton>
        </Box>
    );
}

export default AppBarActions;