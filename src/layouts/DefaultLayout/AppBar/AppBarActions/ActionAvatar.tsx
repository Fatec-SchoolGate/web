import { useAuthStore } from "@/@core/stores/authStore";
import { Avatar, IconButton } from "@mui/material";

const ActionAvatar = () => {
    const { user } = useAuthStore();
    
    return (
        <IconButton>
            <Avatar src={`${user?.profileImage}?alt=media`}>
                {user?.name.charAt(0)}
            </Avatar>
        </IconButton>
    );
}

export default ActionAvatar;