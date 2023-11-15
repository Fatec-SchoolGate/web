import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAttendancesUsersTable } from "../attendances-users-table/store";

interface ActionsProps {
	date: string;
}

const Actions = (props: ActionsProps) => {
	const { t } = useTranslation();

	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

	const { openModal } = useAttendancesUsersTable();

	const openMenu = (event: MouseEvent<HTMLButtonElement>) => setAnchorEl(event.currentTarget);
	const closeMenu = () => setAnchorEl(null);

	return (
		<>
			<IconButton
				onClick={openMenu}
			>
				<Icon icon={"bi:three-dots-vertical"} />
			</IconButton>
			<Menu
				onClose={closeMenu}
				anchorEl={anchorEl}
				open={!!anchorEl}
			>
				<MenuItem onClick={() => openModal(props.date)}>{t("seeUsers")}</MenuItem>
			</Menu>
		</>
	);
};

export default Actions;
