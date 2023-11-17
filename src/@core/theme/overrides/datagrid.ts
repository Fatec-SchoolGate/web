import { ThemeOptions } from "@mui/material";

const DataGridOverrides = (): ThemeOptions["components"] => ({
    MuiDataGrid: {
        styleOverrides: {
            root: {
                border: "none"
            },
            columnHeaders: {
                border: "none"
            },
            footerContainer: {
                border: "none"
            }
        }
    }
});

export default DataGridOverrides;