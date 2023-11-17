import { useSettingsStore } from "@/@core/stores/settingsStore";
import OrganizationsContainer from "@/views/organizations/OrganizationsContainer";
import { Box } from "@mui/material";
import Head from "next/head";
import { useTranslation } from "react-i18next";

const OrganizationsPage = () => {
    const { t } = useTranslation();

    const { appTitle } = useSettingsStore();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Head>
                <title>{t("organizations")} - {appTitle}</title>
            </Head>
            <OrganizationsContainer/>
        </Box>
    );
}

export default OrganizationsPage;