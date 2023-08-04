import { ThemeOptions, alpha } from "@mui/material";

const MenuOverride = (): ThemeOptions["components"] => ({
    MuiMenuItem: {
        styleOverrides: {
            root: ({ theme }) => ({
                borderRadius: 5,
                fontWeight: 500,
                "&:hover": {
                    backgroundColor: alpha(theme.palette.primary.main, .08),
                    color: theme.palette.primary.main
                },
                "&.Mui-selected": {
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText
                }
            })
        }
    }
});

export default MenuOverride;