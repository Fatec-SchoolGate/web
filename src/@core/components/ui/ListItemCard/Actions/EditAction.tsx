import { Box, ListItemIcon, ListItemText, MenuItem } from "@mui/material"
import { Icon } from "@iconify/react"
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { ListItemCardContext } from "..";

const EditAction = () => {
    const { t } = useTranslation();

    const { id, onEditClick } = useContext(ListItemCardContext); 
        
    return (
        <MenuItem
            onClick={() => onEditClick && onEditClick(id)}
        >
            <ListItemIcon>
                <Icon icon={"material-symbols:edit"} />
            </ListItemIcon>
            <ListItemText>
                {t("edit")}
            </ListItemText>
        </MenuItem>
    );
}

export default EditAction;
