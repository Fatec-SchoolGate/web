import { ThemeOptions } from "@mui/material";

const TabsOverride = (): ThemeOptions["components"] => ({
    MuiTab: {
        styleOverrides: {
            root: {
                textTransform: "none"
            },
            textColorPrimary: ({ theme }) => theme.palette.primary.contrastText
        },
    }    
});

export default TabsOverride;