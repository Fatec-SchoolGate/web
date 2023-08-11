import { Box, ListItem, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

interface Props {
    text: string;
    icon: string;
}

const SubInformation = (props: Props) => {

    const {
        text,
        icon
    } = props;

    return (
        <ListItem
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 2,
                width: "fit-content",
            }}
        >
            <Icon
                icon={icon}
            />
            <Typography>{text}</Typography>
        </ListItem>
    );
}

export default SubInformation;