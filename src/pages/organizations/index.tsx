import OrganizationsContainer from "@/views/organizations/OrganizationsContainer";
import { Box } from "@mui/material";

const OrganizationsPage = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <OrganizationsContainer/>
        </Box>
    );
}

export default OrganizationsPage;