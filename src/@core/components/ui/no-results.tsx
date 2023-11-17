import { Box, Typography } from "@mui/material";
import LocationSearchIllustration from "../illustrations/location-search";
import { useTranslation } from "react-i18next";

const NoResults = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <LocationSearchIllustration
                width={200}
                height={200}
            />
            <Typography>{t("noResults")}</Typography>
        </Box>
    );
}

export default NoResults;