import { useTranslation } from "react-i18next";
import { SubjectDto } from "../dto/subjectDto";
import { Box, Card, Chip, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

interface SubjectItemProps {
    subject: SubjectDto;
}

const SubjectItem = (props: SubjectItemProps) => {
    const { subject } = props;

    const { t } = useTranslation();

    const router = useRouter();
    const { organizationId } = router.query;

    return (
        <Card
            variant={"outlined"}
            component={Link}
            href={`${organizationId}/subjects/${subject.id}`}
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
                <Typography>{subject.name}</Typography>
                <Chip
                    label={t(subject.currentUserRole ?? "member")}
                />
            </Box>
        </Card>
    );
}

export default SubjectItem;