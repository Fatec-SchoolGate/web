import { Palette } from "@mui/material";
import { defaultPalette } from "./default-palette";

export const serikaDark: Partial<Palette> = {
    ...defaultPalette,
    primary: {
        light: "#009ddc",
        main: "#3178c6",
        dark: "#357bc9",
        contrastText: "#d1d0c5"
    },
    background: {
        default: "#323437",
        paper: "#2c2e31"
    }
};