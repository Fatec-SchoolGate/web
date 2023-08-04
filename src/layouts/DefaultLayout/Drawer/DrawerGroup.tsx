import { Box, Collapse, ListItem, ListItemButton, ListItemIcon, ListItemText, alpha, useTheme } from "@mui/material";
import { NavigationItem } from ".";
import { Icon } from "@iconify/react";
import { useRouter } from "next/router";
import { useState } from "react";
import DrawerItemSpreader from "./DrawerItemSpreader";

const DrawerGroup = (props: NavigationItem & { children: NavigationItem[] }) => {

    const {
        icon,
        text,
        children
    } = props;

    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const router = useRouter();

    return (
        <>
            <ListItem
                disablePadding
            >
                <ListItemButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        borderRadius: 1,
                        boxSizing: "border-box",
                        my: 1,
                        mx: (theme) => theme.spacing(3.5),
                        height: (theme) => theme.spacing(9),

                        backgroundColor: (theme) => open ? theme.palette.customColors.bodyBgAccent : theme.palette.background.paper,
                    }}
                >
                    {icon && (
                        <ListItemIcon>
                            <Icon
                                icon={icon}
                                width={theme.spacing(5)}
                                color={theme.palette.text.primary}
                            />
                        </ListItemIcon>
                    )}
                    <ListItemText>
                        {text}
                    </ListItemText>
                    <Box
                        component={Icon}
                        icon={"tabler:chevron-right"}
                        width={theme.spacing(5)}
                        color={theme.palette.text.primary}
                        sx={{
                            rotate: `${open ? 90 : 0}deg`,
                            transition: ".2s ease-in-out"
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <Collapse
                in={open}
                sx={{
                    width: "100%"
                }}
            >
                <DrawerItemSpreader
                    items={children}
                />
            </Collapse>
        </>
    );
}

export default DrawerGroup;