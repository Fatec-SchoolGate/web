import { useAuthStore } from "@/@core/stores/authStore";
import { Icon } from "@iconify/react";
import { Avatar, IconButton, ListItemIcon, Menu, MenuItem, Typography } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

const ActionAvatar = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const { user, logout } = useAuthStore();
    const { t } = useTranslation();

    const openMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);
    
    return (
        <>
            <IconButton
                onClick={openMenu}
            >
                <Avatar src={`${process.env.NEXT_PUBLIC_URL}/${user?.profileImage}`}>
                    {user?.name.charAt(0)}
                </Avatar>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={closeMenu}
            >
                <MenuItem>
                    <Avatar
                        sx={{ mr: (theme) => theme.spacing(4), width: 20, height: 20 }}
                        src={`${user?.profileImage}?alt=media`}
                    >
                        {user?.name.charAt(0)}
                    </Avatar>
                    <Typography>
                        {t("profile")}
                    </Typography>
                </MenuItem>
                <MenuItem onClick={logout}>
                    <ListItemIcon>
                        <Icon icon={"mdi:sign-out"}/>
                    </ListItemIcon>
                    {t("signOut")}
                </MenuItem>
            </Menu>
        </>
    );
}

export default ActionAvatar;