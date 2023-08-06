import { Box } from "@mui/material";
import Illustration from "./Illustration";
import Form from "./Form";

const LoginContainer = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row"
            }}
        >
            <Box
                sx={{
                    flex: 2
                }}
            >
                <Illustration/>
            </Box>
            <Box
                sx={{
                    flex: 1
                }}
            >
                <Form/>
            </Box>
        </Box>
    );
}

export default LoginContainer;