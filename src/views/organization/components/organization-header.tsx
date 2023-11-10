import { OrganizationDto } from "@/@core/dto/organizationDto";
import { Box, Card, Typography } from "@mui/material";

interface OrganizationHeaderProps {
    organization: OrganizationDto;
}

const OrganizationHeader = (props: OrganizationHeaderProps) => {
    const { organization } = props;

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
                <Typography variant={"h5"}>
                    {organization.description}
                </Typography>
            </Box>
        </Card>
    );
}

export default OrganizationHeader;