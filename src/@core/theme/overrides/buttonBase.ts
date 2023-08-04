import { ThemeOptions } from "@mui/material";

const ButtonBaseOverride = (): ThemeOptions["components"] => ({
    MuiButtonBase: {
        defaultProps: {
            disableRipple: true
        }
    }
});

export default ButtonBaseOverride;