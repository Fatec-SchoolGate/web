import { ThemeOptions } from "@mui/material";

const ListOverride = (): ThemeOptions["components"] => ({
    MuiList: {
        styleOverrides: {
            root: ({ theme }) => ({
                '&::-webkit-scrollbar': {
                    width: theme.spacing(1)
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: theme.palette.background.default
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: theme.palette.background.paper
                },
                "&.MuiMenu-list": {
                    padding: theme.spacing(2),
                    backgroundColor: theme.palette.background.default
                }
            })
        }
    }
});

export default ListOverride;
