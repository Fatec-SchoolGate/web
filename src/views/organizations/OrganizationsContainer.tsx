import { Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SwipeableViews from 'react-swipeable-views';
import YourOrganizationList from "./YourOrganizations/YourOrganizationList";
import Header from "./Header";

const OrganizationsContainer = () => {

    const [tabValue, setTabValue] = useState<any>(0);

    const { t } = useTranslation();

    const changeTab = (_: any, value: any) => setTabValue(value);

    return (
        <Card
            sx={{
                px: (theme) => theme.spacing(5)
            }}
        >
            <Header/>
            <Tabs
                value={tabValue}
                onChange={changeTab}
            >
                <Tab
                    value={0}
                    label={t("yourOrganizations")}
                />
                <Tab
                    value={1}
                    label={t("invitedOrganizations")}
                />
            </Tabs>
            <SwipeableViews
                index={tabValue}
                onChange={(index) => changeTab(null, index)}
            >
                <YourOrganizationList/>
            </SwipeableViews>
        </Card>
    );
}

export default OrganizationsContainer;