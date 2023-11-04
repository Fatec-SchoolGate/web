import { Box, CircularProgress, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import LogoIcon from "../../logo";
import FinishLoadingText from "../finish-loading-text";
import { useLoadingComponent } from "./store";
import { useAuthStore } from "@/@core/stores/authStore";

const LoadingSpinner = () => {
    const { loading } = useAuthStore();

    return (
        <AnimatePresence>
            {loading && (
                <Box
                    component={motion.div}
                    sx={{
                        position: "absolute",
                        backgroundColor: (theme) => theme.palette.background.paper,
                        zIndex: 9999,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "100vh",
                        width: "100vw",
                        gap: 2
                    }}
                    exit={{
                        opacity: 0,
                        transition: { delay: 2, duration: 1.5 }
                    }}
                >
                    <Box
                        component={motion.div}
                        sx={{
                            transformOrigin: "50% 35%",
                        }}
                        exit={{
                            rotate: 0,
                            scale: 1,
                            transition: { duration: 1.5 }
                        }}
                        animate={{
                            rotate: [0, 270, 0],
                            scale: [1, 1.2, 0.9, 1],
                        }}
                        transition={{
                            duration: 1.4,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 0.35
                        }}
                    >
                        <LogoIcon/>
                    </Box>
                    <Box
                        component={motion.div}
                        sx={{
                            width: 0,
                            overflow: "hidden"
                        }}
                        exit={{
                            width: "fit-content",
                            transition: { duration: 0.5 }
                        }}
                    >
                        <Typography fontSize={60}>
                            SchoolGate
                        </Typography>
                    </Box>
                </Box>
            )}
        </AnimatePresence>
    );
}

export default LoadingSpinner;