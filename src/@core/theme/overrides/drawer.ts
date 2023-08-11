import { ThemeOptions } from "@mui/material";

const DrawerOverride = (): ThemeOptions["components"] => ({
    MuiDrawer: {
        styleOverrides: {
            paper: {
                backgroundImage: "none"
            }
        }
    }
});

export default DrawerOverride;