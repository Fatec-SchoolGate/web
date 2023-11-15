import { NavigationItem } from "@/layouts/DefaultLayout/Drawer";

export const navigationItems: NavigationItem[] = [
    {
        text: "Dashboards",
        icon: "tabler:smart-home",
        value: "/dashboards"
    },
    {
        text: "Organizations",
        icon: "octicon:organization-16",
        value: "/organizations"
    },
    {
        text: "Scanner",
        icon: "mdi:qrcode-scan",
        value: "/scanner"
    },
];