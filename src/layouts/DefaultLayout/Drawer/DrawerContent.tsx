import { Box, List, alpha } from "@mui/material";
import { NavigationItem } from ".";
import DrawerHeader from "./DrawerHeader";
import DrawerItemSpreader from "./DrawerItemSpreader";

interface Props {
    items: NavigationItem[];
}

const DrawerContent = (props: Props) => {
    const {
        items
    } = props;

    return (
        <Box
            sx={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                maxHeight: "100%"
            }}
        >
            <DrawerHeader/>
            <Box
                sx={{
                    background: (theme) => `linear-gradient(to bottom, ${theme.palette.background.paper} 30%, ${alpha(theme.palette.background.paper, 0.6)})`,
                    height: (theme) => theme.spacing(4)
                }}
            />
            <List
                sx={{
                    flex: 1,
                    overflowY: "scroll",
                    overflowX: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <DrawerItemSpreader items={items}/>
            </List>
        </Box>
    );
}

export default DrawerContent;