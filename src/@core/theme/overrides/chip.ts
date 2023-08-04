import { ThemeOptions } from "@mui/material";

const ChipOverride = (): ThemeOptions["components"] => ({
    MuiChip: {
        styleOverrides: {
            root: {
                borderRadius: 6,
            },
            sizeMedium: ({ theme }) => ({
                height: theme.spacing(6)
            })
        }
    }
});

export default ChipOverride;