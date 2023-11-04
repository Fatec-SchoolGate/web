import { Avatar, Box, IconButton } from "@mui/material";
import { Icon } from "@iconify/react";
import { useSettingsStore } from "@/@core/stores/settingsStore";
import ActionLanguage from "./ActionLanguage";
import ActionAvatar from "./ActionAvatar";

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
                justifyContent: "flex-end",
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
            {/* <IconButton>
                <Icon
                    icon={"uil:create-dashboard"}
                />
            </IconButton>
            <IconButton>
                <Icon
                    icon={"mi:notification"}
                />
            </IconButton> */}
            <ActionAvatar/>
        </Box>
    );
}

export default AppBarActions;