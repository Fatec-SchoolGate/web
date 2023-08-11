import { Box } from "@mui/material";
import ListItemCard from "../../../@core/components/ui/ListItemCard";

const YourOrganizationList = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <ListItemCard/>
            <ListItemCard/>
        </Box>
    );
}

export default YourOrganizationList;