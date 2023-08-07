import { Box, CircularProgress } from "@mui/material";

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                width: "100vw"
            }}
        >
            <CircularProgress
                size={70}
            />
        </Box>
    );
}

export default LoadingSpinner;