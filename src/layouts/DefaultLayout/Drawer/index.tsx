import { Box, Drawer, SwipeableDrawer, Theme, useMediaQuery } from '@mui/material';
import { useDefaultLayoutStore } from '@/@core/stores/defaultLayoutStore';
import DrawerContent from './DrawerContent';

export interface NavigationItem {
    text: string;
    icon?: string;
    children?: NavigationItem[];
    value?: any;
    isSection?: boolean;
};

interface Props {
    items: NavigationItem[];
}

const LayoutDrawer = (props: Props) => {
    const {
        items
    } = props;

    const {
        open,
        setOpen,
        drawerWidth
    } = useDefaultLayoutStore();

    const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));
    
    return (
        <Box
            component={"nav"}
        >
            <Drawer
                onClose={() => setOpen(false)}
                variant={"permanent"}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        transition: 'width .25s ease-in-out, box-shadow .25s ease-in-out',
                        width: !hidden ? drawerWidth : 0
                    },
                    width: !hidden ? drawerWidth : 0
                }}
            >
                <DrawerContent
                    items={items}
                />
            </Drawer>
            <SwipeableDrawer
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                variant={"temporary"}
                open={hidden && open}
                sx={{
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        backgroundImage: "none",
                        width: drawerWidth
                    }
                }}
            >
                <DrawerContent
                    items={items}
                />
            </SwipeableDrawer>
        </Box>
    );
}

export default LayoutDrawer;