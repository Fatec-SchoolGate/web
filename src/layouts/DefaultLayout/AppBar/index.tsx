import { AppBar, Box, IconButton, Toolbar } from "@mui/material"
import AppBarContent from "./AppBarContent";

const LayoutAppBar = () => {
    return (
        <Box
            sx={{
                position: "sticky",
                top: (theme) => theme.spacing(2),
                my: (theme) => theme.spacing(2),
                mx: (theme) => theme.spacing(6),
                zIndex: 1
            }}
        >
            <AppBar
                position={"sticky"}
                sx={{
                    backgroundColor: (theme) => theme.palette.background.paper,
                    borderRadius: 0.5
                }}
            >
                <Toolbar>
                    <AppBarContent/>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default LayoutAppBar;