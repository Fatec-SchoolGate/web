import { Box, Typography } from "@mui/material";
import ListItemCard from "../../../@core/components/ui/ListItemCard";
import { useOrganizations } from "@/@core/api/organizations/getOrganizations";
import { useTranslation } from "react-i18next";

const YourOrganizationList = () => {

    const { t } = useTranslation();
    const { data } = useOrganizations();
    const organizations = data?.data.organizations;
    
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

export default YourOrganizationList;