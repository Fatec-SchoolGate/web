import { Card, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SwipeableViews from "react-swipeable-views";
import Header from "./components/header";

const SubjectContainer = () => {
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
                    label={t("classesTimes")}
                />
                <Tab
                    value={1}
                    label={t("members")}
                />
            </Tabs>
            <SwipeableViews
                index={tabValue}
                onChange={(index) => changeTab(null, index)}
            >
                <div>aaa</div>
            </SwipeableViews>
        </Card>
    );
}

export default SubjectContainer;