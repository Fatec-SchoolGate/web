import { Box } from "@mui/material";
import Form from "./Form";

const RegisterContainer = () => {
    return (
        <Box>
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

export default RegisterContainer;