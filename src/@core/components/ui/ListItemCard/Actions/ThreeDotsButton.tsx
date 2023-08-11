import { Button, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import { Icon } from "@iconify/react";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

const ThreeDotsButton = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>();

    const { t } = useTranslation();

    const openMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    return (
        <>
            <Button
                onClick={openMenu}
                variant={"contained"}
                color={"inherit"}
                sx={{
                    minWidth: 0,
                    width: "32px",
                    height: "32px",
                    p: 0
                }}
            >
                <Icon
                    icon={"bi:three-dots"}
                />
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={closeMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <Icon icon={"material-symbols:edit"} />
                    </ListItemIcon>
                    <ListItemText>
                        {t("edit")}
                    </ListItemText>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <Icon icon={"material-symbols:delete"} />
                    </ListItemIcon>
                    <ListItemText>
                        {t("delete")}
                    </ListItemText>
                </MenuItem>
            </Menu>
        </>
    );
}

export default ThreeDotsButton;