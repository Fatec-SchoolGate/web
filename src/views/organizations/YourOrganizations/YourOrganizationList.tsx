import { Box } from "@mui/material";
import OrganizationCard from "./OrganizationCard";

const YourOrganizationList = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <OrganizationCard/>
            <OrganizationCard/>
        </Box>
    );
}

export default YourOrganizationList;