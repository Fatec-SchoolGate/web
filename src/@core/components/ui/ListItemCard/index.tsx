import { Box, Card, Chip, List, Typography } from "@mui/material";
import SubInformation, { SubInformationProps } from "./SubInformation";
import Actions from "./Actions";
import { ReactNode, createContext } from "react";

interface ListItemCardState {
    id?: any;
    onEditClick?: (id: any) => void;
}

export const ListItemCardContext = createContext<ListItemCardState>({});

interface Props {
    id?: any;
    title?: string;
    subInformations?: SubInformationProps[];
    previewUrl?: string;
    onEditClick?: (id: any) => void;
    CustomActions?: ReactNode;
}

const ListItemCard = (props: Props) => {
    const {
        id,
        title,
        subInformations,
        previewUrl,
        onEditClick,
        CustomActions
    } = props;

    return (
        <ListItemCardContext.Provider
            value={{
                id,
                onEditClick
            }}
        >
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
                            CustomActions={CustomActions}
                            previewUrl={previewUrl}
                        />
                    </Box>
                    <List
                        sx={{
                            display: "flex",
                            flexWrap: "wrap"
                        }}
                    >
                        {subInformations?.map((subInformation, key) => (
                            <SubInformation
                                icon={subInformation.icon}
                                text={subInformation.text}
                                key={key}
                            />
                        ))}
                    </List>
                </Box>
            </Card>
        </ListItemCardContext.Provider>
    );
}

export default ListItemCard;
