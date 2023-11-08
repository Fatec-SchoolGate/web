import { Palette } from "@mui/material";
import { defaultPalette } from "./default-palette";

export const serikaDark: Partial<Palette> = {
    ...defaultPalette,
    primary: {
        light: "#e2b714",
        main: "#e2b714",
        dark: "#e2b714",
        contrastText: "#d1d0c5"
    },
    background: {
        default: "#323437",
        paper: "#2c2e31"
    }
};