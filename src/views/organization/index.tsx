import { Box, Tab, Tabs } from "@mui/material";
import SubjectSection from "./components/SubjectSection";
import SwipeableViews from "react-swipeable-views";
import MembersList from "./components/members";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const OrganizationContainer = () => {

    const [tab, setTab] = useState(0);

    const { t } = useTranslation();

    const changeTab = (index: number) => setTab(index);

    return (
        <Box>
            <Tabs
                value={tab}
                onChange={(_, value) => changeTab(value)}
            >
                <Tab value={0} label={t("subjects")} />
                <Tab value={1} label={t("members")} />
            </Tabs>
            <SwipeableViews index={tab} onChangeIndex={changeTab}>
                <SubjectSection />
                <MembersList />
            </SwipeableViews>
        </Box>
    );
}

export default OrganizationContainer;
