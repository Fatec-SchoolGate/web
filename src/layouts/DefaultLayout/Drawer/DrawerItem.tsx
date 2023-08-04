import { ListItem, ListItemButton, ListItemIcon, ListItemText, alpha, useTheme } from "@mui/material";
import { ReactNode } from "react";
import { Icon } from '@iconify/react';
import { NavigationItem } from ".";
import { useRouter } from "next/router";
import { matchUrlQueries } from "@/@core/utils/matchUrlQueries";

const DrawerItem = (props: NavigationItem) => {
    const {
        icon,
        text,
        value
    } = props;

    const router = useRouter();
    const theme = useTheme();
    const active = router.pathname === value || matchUrlQueries(router, value);

    return (
        <ListItem
            disablePadding
        >
            <ListItemButton
                className={active ? "active" : ""}
                onClick={() => router.replace(value ?? "/")}
                sx={{
                    borderRadius: 1,
                    boxSizing: "border-box",
                    my: 1,
                    mx: (theme) => theme.spacing(3.5),
                    height: (theme) => theme.spacing(9),
                    "&.active": {
                        background: (theme) => `linear-gradient(72.47deg, ${theme.palette.primary.main} 22.16%, ${alpha(theme.palette.primary.main, 0.7)} 76.47%)`,
                        color: (theme) => theme.palette.primary.contrastText
                    }
                }}
            >
                {icon && (
                    <ListItemIcon>
                        <Icon
                            icon={icon}
                            width={theme.spacing(5)}
                            color={theme.palette.primary.contrastText}
                        />
                    </ListItemIcon>
                )}
                <ListItemText
                    sx={{
                        fontWeight: active ? 700 : 0
                    }}
                >
                    {text}
                </ListItemText>
            </ListItemButton>
        </ListItem>
    );
}

export default DrawerItem;