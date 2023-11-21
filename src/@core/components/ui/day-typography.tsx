import { Typography } from "@mui/material"

interface DayTypographyProps {
    label: string;
    selected?: boolean;
    underline?: boolean;
    showDot?: boolean;
}

const DayTypography = (props: DayTypographyProps) => {
    const { label, selected = false, underline = false, showDot = true } = props;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                userSelect: "none"
            }}
        >
            {showDot && (
                <Typography
                    sx={{ height: 15 }}
                    color={selected ? "primary" : "inherit"}
                >
                    •
                </Typography>
            )}
            <Typography
                sx={{
                    color: (theme) => selected ? theme.palette.primary.main : "inherit",
                    borderBottom: "1px solid transparent",
                    ...(underline && { borderColor: (theme) => selected ? theme.palette.primary.main : "inherit" })
                }}
            >
                {label.charAt(0)}   
            </Typography>
        </div>
    );
}

export default DayTypography;