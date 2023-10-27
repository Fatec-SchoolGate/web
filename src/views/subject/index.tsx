import { Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "./components/header";
import ScheduleSection from "./components/schedule-section";
import SubjectBreadcrumbs from "./components/subject-breadcrumbs";
import MembersSection from "./components/members-section";

const SubjectContainer = () => {
    const [tabValue, setTabValue] = useState<any>(0);

    const { t } = useTranslation();

    const changeTab = (_: any, value: any) => setTabValue(value);

    return (
        <>
            <SubjectBreadcrumbs/>
            <Card
                sx={{
                    px: (theme) => theme.spacing(5)
                }}
            >
                <Header/>
                {/* <Tabs
                    value={tabValue}
                    onChange={changeTab}
                >
                    <Tab
                        value={0}
                        label={t("classesTimes")}
                    />
                    <Tab
                        value={1}
                        label={t("members")}
                    />
                </Tabs> */}
                {tabValue === 0 && <ScheduleSection/>}
                {/* {tabValue === 1 && <MembersSection/>} */}
            </Card>
        </>
    );
}

export default SubjectContainer;