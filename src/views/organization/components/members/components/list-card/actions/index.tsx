import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import Remove from "./remove";
import { UserDto } from "@/@core/dto/userDto";

interface Props {
    user: UserDto;
}

const Actions = (props: Props) => {
    const { user } = props;

    const { t } = useTranslation();

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>();

    const openMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
    const closeMenu = () => setAnchorEl(null);

    return (
        <>
            <IconButton onClick={openMenu}>
                <Icon
                    icon={"bi:three-dots"}
                />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={closeMenu}
                onClick={closeMenu}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Remove userId={user.id}/>
            </Menu>
        </>
    )
}

export default Actions;