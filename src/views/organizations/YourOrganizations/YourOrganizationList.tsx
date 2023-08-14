import { Box } from "@mui/material";
import ListItemCard from "../../../@core/components/ui/ListItemCard";
import { useOrganizations } from "@/@core/api/organizations/getOrganizations";

const YourOrganizationList = () => {

    const { data } = useOrganizations();
    const organizations = data?.data.organizations;
    console.log(organizations);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            {organizations?.map((organization, key) => (
                <ListItemCard
                    key={organization.id ?? key}
                    title={organization.name}
                />   
            ))}
        </Box>
    );
}

export default YourOrganizationList;