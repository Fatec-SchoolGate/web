import { ThemeOptions } from "@mui/material";

const TabsOverride = (): ThemeOptions["components"] => ({
    MuiTab: {
        styleOverrides: {
            root: {
                textTransform: "none"
            }
        },
    }    
});

export default TabsOverride;