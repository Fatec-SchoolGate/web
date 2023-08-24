import { Box, LinearProgress, SxProps } from "@mui/material";

interface Props {
    isLoading: boolean;
    sx?: SxProps;
}

const StickyLinearProgress = (props: Props) => {

    const { isLoading, sx } = props;

    if (!isLoading) return null;

    return (
        <Box
            sx={{
                position: "sticky",
                top: 0,
                left: 0,
                m: (theme) => theme.spacing(-4),
                mb: (theme) => theme.spacing(1),
                ...sx
            }}
        >
            <LinearProgress/>
        </Box>
    );
}

export default StickyLinearProgress;