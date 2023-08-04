import { Box, Card, Chip, List, Typography } from "@mui/material";
import SubInformation from "./SubInformation";
import Actions from "./Actions";

const OrganizationCard = () => {
    return (
        <Card
            variant={"outlined"}
            sx={{
                padding: (theme) => theme.spacing(5),
                my: (theme) => theme.spacing(5)
            }}
        >
            <Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 2
                        }}
                    >
                        <Typography>Name</Typography>
                        <Chip
                            variant={"outlined"}
                            label={"Member"}
                        />
                    </Box>
                    <Actions/>
                </Box>
                <List
                    sx={{
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    <SubInformation
                        icon={"tabler:building"}
                        text={"Rua Jorge de Andrade"}
                    />
                    <SubInformation
                        icon={"material-symbols:location-on"}
                        text={"Brasil"}
                    />
                    <SubInformation
                        icon={"ic:sharp-people"}
                        text={"70 membros"}
                    />
                </List>
            </Box>
        </Card>
    );
}

export default OrganizationCard;