import { useSettingsStore } from "@/@core/stores/settingsStore";
import DashboardContainer from "@/views/dashboards";
import Head from "next/head";

const Dashboard = () => {
    const { appTitle } = useSettingsStore();

    return (
        <>
            <Head>
                <title>Dashboards - {appTitle}</title>
            </Head>
            <DashboardContainer/>
        </>
    );
}

export default Dashboard;