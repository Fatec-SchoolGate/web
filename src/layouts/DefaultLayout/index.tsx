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
        <div>
            <LayoutDrawer
                items={navigationItems}
            />
            <Box
                sx={{
                    // width: { lg: `calc(100% - ${240}px)` },
                    ml: { lg: `${drawerWidth}px` },
                    transition: 'margin-left .25s ease-in-out',
                }}
            >
                <LayoutAppBar/>
                {children}
            </Box>
        </div>
    );
}

export default DefaultLayout;