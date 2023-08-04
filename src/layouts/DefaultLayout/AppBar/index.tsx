import { AppBar, Box, IconButton, Toolbar, useTheme } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { useDefaultLayoutStore } from "@/@core/stores/defaultLayoutStore";

const LayoutAppBar = () => {

    const {
        setOpen
    } = useDefaultLayoutStore();

    return (
        <Box>
            <AppBar
                position={"sticky"}
                // sx={{
                //     mx: theme.spacing(6),
                //     background: "none"
                // }}
            >
                <Toolbar
                    // sx={{
                    //     m: 10
                    // }}
                >
                    <IconButton
                        onClick={() => setOpen(true)}
                        sx={{
                            display: { xs: 'block', lg: 'none' },
                        }}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default LayoutAppBar;