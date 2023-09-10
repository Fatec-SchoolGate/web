import { Icon } from "@iconify/react";
import { Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import ThreeDotsButton from "./ThreeDotsButton";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    CustomActions?: ReactNode;
    previewUrl?: string;
}

const Actions = (props: Props) => {
    const { previewUrl, CustomActions } = props;
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: 3
            }}
        >
            {CustomActions}
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
