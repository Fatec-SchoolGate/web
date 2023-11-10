import { Box, Typography } from "@mui/material";
import ListItemCard from "../../../@core/components/ui/ListItemCard";
import { useOrganizations } from "@/@core/api/organizations/getOrganizations";
import { useTranslation } from "react-i18next";
import OrganizationItem from "./organization-item";

const OrganizationList = () => {

    const { t } = useTranslation();
    const { data } = useOrganizations();
    const organizations = data?.data.organizations;

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
            {!organizations || organizations?.length == 0 && (
                <Typography
                    variant={"h4"}
                    sx={{
                        padding: (theme) => theme.spacing(8),
                        textAlign: "center"
                    }}
                >
                    {t("noResults")}
                </Typography>
            )}
        </Box>
    );
}

export default OrganizationList;