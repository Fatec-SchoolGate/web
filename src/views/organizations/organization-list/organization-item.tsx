import { Box, Card, Chip, Typography } from "@mui/material";
import Link from "next/link";
import { OrganizationDto } from "@/@core/dto/organizationDto";
import { useTranslation } from "react-i18next";

interface OrganizationItemProps {
    organization: OrganizationDto;
}

const OrganizationItem = (props: OrganizationItemProps) => {
    const { organization } = props;

    const { t } = useTranslation();

    return (
        <Card
            variant={"outlined"}
            component={Link}
            href={`/organizations/${organization.id}`}
            sx={{
                p: 4,
                textDecoration: "none",
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row"
                },
                justifyContent: "space-between",
                alignItems: {
                    xs: "flex-start",
                     sm: "center"
                }
            }}
        >
            <Box display={"flex"} alignItems={"center"} flexDirection={"row"} gap={4}>
                <Typography>{organization.name}</Typography>
                <Chip
                    label={t(organization.userRole ?? "member")}
                />
            </Box>
        </Card>
    );
}

export default OrganizationItem;