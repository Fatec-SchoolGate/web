import { ThemeOptions } from "@mui/material";

const BreadcrumbsOverride = (): ThemeOptions["components"] => ({
    MuiBreadcrumbs: {
        styleOverrides: {
            root: {
                "& a": {
                    textDecoration: "none",
                    color: "inherit"
                }
            }
        }
    }
});

export default BreadcrumbsOverride;