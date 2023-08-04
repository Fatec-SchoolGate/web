import { ListItem } from "@mui/material";

interface Props {
    text: string;
}

const DrawerSection = (props: Props) => {

    const {
        text
    } = props;

    return (
        <ListItem
            sx={{
                textTransform: "uppercase",
                mt: (theme) => theme.spacing(2),
            }}
        >
            {text}
        </ListItem>
    );
}

export default DrawerSection;