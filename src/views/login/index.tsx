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
            <Illustration/>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                }}
            >
                <Form/>
            </Box>
        </Box>
    );
}

export default LoginContainer;