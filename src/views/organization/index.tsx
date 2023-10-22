import { Card, Tab, Tabs } from "@mui/material";
import SubjectSection from "./components/SubjectSection";
import MembersList from "./components/members";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const OrganizationContainer = () => {

    const [tab, setTab] = useState(0);

    const { t } = useTranslation();

    const changeTab = (index: number) => setTab(index);

    return (
        <Card>
            <Tabs
                indicatorColor={"secondary"}
                textColor={"secondary"}
                value={tab}
                onChange={(_, value) => changeTab(value)}
            >
                <Tab value={0} label={t("subjects")} />
                <Tab value={1} label={t("members")} />
            </Tabs>
            {tab === 0 && <SubjectSection/>}
            {tab === 1 && <MembersList/>}
        </Card>
    );
}

export default OrganizationContainer;
