import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";
import YourOrganizationList from "./YourOrganizations/YourOrganizationList";
import Header from "./Header";

const OrganizationsContainer = () => {
    const { t } = useTranslation();

    return (
        <Card
            sx={{
                px: (theme) => theme.spacing(5)
            }}
        >
            <Header/>
            <YourOrganizationList/>
        </Card>
    );
}

export default OrganizationsContainer;