import { Box, Card, Chip, List, Typography } from "@mui/material";
import SubInformation, { SubInformationProps } from "./SubInformation";
import Actions from "./Actions";

interface Props {
    title?: string;
    subInformations?: SubInformationProps[];
    previewUrl?: string;
}

const ListItemCard = (props: Props) => {
    const {
        title,
        subInformations,
        previewUrl
    } = props;

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
                        <Typography>{title}</Typography>
                        <Chip
                            variant={"outlined"}
                            label={"Member"}
                        />
                    </Box>
                    <Actions
                        previewUrl={previewUrl}
                    />
                </Box>
                <List
                    sx={{
                        display: "flex",
                        flexWrap: "wrap"
                    }}
                >
                    {subInformations?.map((subInformation) => (
                        <SubInformation
                            icon={subInformation.icon}
                            text={subInformation.text}
                        />
                    ))}
                </List>
            </Box>
        </Card>
    );
}

export default ListItemCard;