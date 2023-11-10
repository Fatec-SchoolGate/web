import { Card } from "@mui/material";
import { useTranslation } from "react-i18next";
import OrganizationList from "./organization-list";
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
            <OrganizationList/>
        </Card>
    );
}

export default OrganizationsContainer;