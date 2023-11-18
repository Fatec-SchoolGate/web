import { Box, Typography } from "@mui/material";
import ListItemCard from "../../../@core/components/ui/ListItemCard";
import { useOrganizations } from "@/@core/api/organizations/getOrganizations";
import { useTranslation } from "react-i18next";
import OrganizationItem from "./organization-item";
import ListSkeleton from "@/@core/components/ui/list-skeleton";
import NoResults from "@/@core/components/ui/no-results";

const OrganizationList = () => {

    const { t } = useTranslation();
    const { data, isLoading } = useOrganizations();
    const organizations = data?.data.organizations;

    if (isLoading) return <ListSkeleton/>;

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                my: 4
            }}
        >
            {organizations?.map((organization) => (
                <OrganizationItem
                    organization={organization}
                    key={organization.id}
                />
            ))}
            {!organizations || organizations?.length == 0 && <NoResults/>}
        </Box>
    );
}

export default OrganizationList;