import { Box, IconButton, Menu, MenuItem, Theme, alpha, styled } from "@mui/material"
import { Icon } from "@iconify/react"
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { text: "Português", value: "br" },
    { text: "English", value: "en" },
    { text: "Español", value: "es" },
];

const ActionLanguage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const { i18n } = useTranslation();

    const openMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    return (
        <Box>
            <IconButton
                onClick={openMenu}
            >
                <Icon icon={"prime:language"}/>
            </IconButton>
            <Menu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={closeMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                MenuListProps={{
                    sx: {
                        padding: (theme) => theme.spacing(2),
                        backgroundColor: (theme) => theme.palette.customColors.bodyBg
                    }
                }}
            >
                {languages.map((language) => (
                    <MenuItem
                        key={language.value}
                        onClick={() => i18n.changeLanguage(language.value)}
                        selected={i18n.language == language.value}
                    >
                        {language.text}
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default ActionLanguage;