import { Icon } from "@iconify/react/dist/iconify.js";
import { IconButton } from "@mui/material";

const InviteButton = () => {
    const { mutateAsync: createInvite } = use

    return (
        <IconButton>
            <Icon icon={"material-symbols:person-add"}/>
        </IconButton>
    );
}