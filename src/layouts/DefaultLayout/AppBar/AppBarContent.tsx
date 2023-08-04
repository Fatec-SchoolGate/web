import { Box } from "@mui/material";
import AppBarSearchBar from "./AppBarSearchBar";
import AppBarActions from "./AppBarActions";

const AppBarContent = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "100%"
            }}
        >
            <AppBarSearchBar/>
            <AppBarActions/>
        </Box>
    );
}

export default AppBarContent;