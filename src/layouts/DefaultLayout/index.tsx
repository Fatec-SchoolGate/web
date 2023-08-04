import { ReactNode } from "react";
import LayoutAppBar from './AppBar';  
import LayoutDrawer from "./Drawer";
import { Box } from "@mui/material";
import { navigationItems } from "@/@core/constants/navigationItems";
import { useDefaultLayoutStore } from "@/@core/stores/defaultLayoutStore";

interface Props {
    children: ReactNode;
};

const DefaultLayout = (props: Props) => {

    const {
        children
    } = props;

    const {
        drawerWidth
    } = useDefaultLayoutStore();
    
    return (
        <Box>
            <LayoutDrawer
                items={navigationItems}
            />
            <Box
                sx={{
                    ml: { lg: `${drawerWidth}px` },
                    transition: 'margin-left .25s ease-in-out',
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    "& > *": {
                        width: "90%",
                        maxWidth: (theme) => theme.breakpoints.values.lg,
                    }
                }}
            >
                <LayoutAppBar/>
                <Box
                    id={"content-container"}
                    sx={{
                        my: (theme) => theme.spacing(2),
                        mx: (theme) => theme.spacing(6)
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Box>
    );
}

export default DefaultLayout;