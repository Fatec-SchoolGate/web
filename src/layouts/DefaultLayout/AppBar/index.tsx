import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import AppBarContent from "./AppBarContent";

const LayoutAppBar = () => {
    return (
        <Box
            sx={{
                my: (theme) => theme.spacing(2),
                mx: (theme) => theme.spacing(6)
            }}
        >
            <AppBar
                position={"sticky"}
                color={"transparent"}
            >
                <Toolbar>
                    <AppBarContent/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default LayoutAppBar;