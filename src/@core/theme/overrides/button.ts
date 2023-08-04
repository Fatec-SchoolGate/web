import { ThemeOptions } from "@mui/material";

const ButtonOverride = (): ThemeOptions["components"] => ({
    MuiButton: {
        styleOverrides: {
            root: {
                textTransform: "none"
            }
        }
    }
});

export default ButtonOverride;