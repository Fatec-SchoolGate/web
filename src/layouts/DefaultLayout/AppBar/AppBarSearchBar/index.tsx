import { useDefaultLayoutStore } from "@/@core/stores/defaultLayoutStore";
import { Icon } from "@iconify/react";
import { Box, IconButton } from "@mui/material";

const AppBarSearchBar = () => {
    const {
        setOpen
    } = useDefaultLayoutStore();

    return (
        <Box
            sx={{
                flex: 3,
                display: "flex",
                alignItems: "center"
            }}
        >
            <IconButton
                onClick={() => setOpen(true)}
                sx={{
                    display: { xs: 'inherit', lg: 'none' },
                }}
            >
                <Icon
                    icon={"material-symbols:menu"}
                />
            </IconButton>
            <IconButton>
                <Icon
                    icon={"material-symbols:search"}
                />
            </IconButton>
        </Box>
    );
}

export default AppBarSearchBar;