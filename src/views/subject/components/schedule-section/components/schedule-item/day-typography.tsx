import { Typography } from "@mui/material"

interface DayTypographyProps {
    label: string;
    selected?: boolean;
}

const DayTypography = (props: DayTypographyProps) => {
    const { label, selected = false } = props;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}
        >
            <Typography
                sx={{ height: 15 }}
                color={selected ? "primary" : "inherit"}
            >
                •
            </Typography>
            <Typography
                color={selected ? "primary" : "inherit"}
            >
                {label.charAt(0)}   
            </Typography>
        </div>
    );
}

export default DayTypography;