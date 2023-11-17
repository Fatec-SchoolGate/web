import { OrganizationDto } from "@/@core/dto/organizationDto";
import { Box, Card, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

interface OrganizationHeaderProps {
    organization: OrganizationDto;
}

const OrganizationHeader = (props: OrganizationHeaderProps) => {
    const { organization } = props;

    const { t } = useTranslation();

    return (
        <Card
            sx={{
                p: 6,
                pt: 10
            }}
        >
            <Box>
                <Typography variant={"h2"}>
                    {organization.name}
                </Typography>
                <Typography variant={"subtitle2"}>
                    {organization.code} ‧ {organization?.schedules?.length ?? 0} {t("schedules")} ‧ {organization?.organizationUsers?.length ?? 0} {t("members")}
                </Typography>
            </Box>
        </Card>
    );
}

export default OrganizationHeader;