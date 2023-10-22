import { UserDto } from "@/@core/dto/userDto";
import { Box, Card, Typography } from "@mui/material";
import Actions from "./actions";

interface ListCardProps {
    user: UserDto;
}

const ListCard = (props: ListCardProps) => {

    const { user } = props;
    
    return (
        <Card
            variant={"outlined"}
            sx={{
                p: 4,
                my: 2
            }}
        >
            <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Typography>{user.name}</Typography>
                <Actions
                    user={user}
                />
            </Box>
        </Card>
    );
}

export default ListCard;