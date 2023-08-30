import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ThreeDotsButton from "./ThreeDotsButton";
import Link from "next/link";

interface Props {
    previewUrl?: string;
}

const Actions = (props: Props) => {
    const { previewUrl, id } = props;
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3
            }}
        >
            {previewUrl && (
                <Button
                    component={Link}
                    href={previewUrl}
                    variant={"contained"}
                    color={"inherit"}
                    startIcon={(
                        <Icon
                            icon={"mdi:eye-outline"}
                        />
                    )}
                >
                    {t("preview")}
                </Button>
            )}
            <ThreeDotsButton/>
        </Box>
    );
}

export default Actions;
