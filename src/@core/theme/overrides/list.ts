import { ThemeOptions } from "@mui/material";

const ListOverride = (): ThemeOptions["components"] => ({
    MuiList: {
        styleOverrides: {
            root: ({ theme }) => ({
                '&::-webkit-scrollbar': {
                    width: theme.spacing(1)
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: theme.palette.customColors.bodyBg
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.customColors.bodyBgAccent
                },
                "&.MuiMenu-list": {
                    padding: theme.spacing(2),
                    backgroundColor: theme.palette.customColors.bodyBg,
                }
            })
        }
    }
});

export default ListOverride;
