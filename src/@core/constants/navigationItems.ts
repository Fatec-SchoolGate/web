import { NavigationItem } from "@/layouts/DefaultLayout/Drawer";

export const navigationItems: NavigationItem[] = [
    {
        text: "Primeira",
        icon: "tabler:smart-home",
        value: "/dashboard"
    },
    {
        text: "section",
        isSection: true
    },
    {
        text: "Dashboard",
        icon: "tabler:smart-home",
        children: [
            {
                text: "Primeiri",
                icon: "tabler:smart-home",
            },
            {
                text: "2",
                icon: "tabler:smart-home",
            },
            {
                text: "3",
                icon: "tabler:smart-home",
            },
            {
                text: "P2",
                icon: "tabler:smart-home",
                children: [
                    {
                        text: "Dashboard",
                        icon: "tabler:smart-home",
                        children: [
                            {
                                text: "Primeiri",
                                icon: "tabler:smart-home",
                            },
                            {
                                text: "2",
                                icon: "tabler:smart-home",
                            },
                            {
                                text: "3",
                                icon: "tabler:smart-home",
                            },
                            {
                                text: "P2",
                                icon: "tabler:smart-home",
                            },
                        ]
                    },
                ]
            },
        ]
    },
];