
import ListItemCard from "@/@core/components/ui/ListItemCard";
import { Box, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSubjects } from "../api/getSubjects";
import { useSubjectSectionStore } from "../store";
import { useRouter } from "next/router";
import SubjectItem from "./subject-item";

const SubjectList = () => {

    const router = useRouter();
    const { organizationId } = router.query;
    
    const { t } = useTranslation();
    const { data: response, isLoading } = useSubjects();
    const subjects = response?.data.subjects ?? [];

    const { openFormEdit } = useSubjectSectionStore();

    if (isLoading) return <Skeleton height={300}/>

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4
            }}
        >
            {subjects.length == 0 && (
                <Typography
                    sx={{
                        textAlign: "center",
                        p: (theme) => theme.spacing(4)
                    }}
                >
                    {t("noSubjects")}
                </Typography>
            )}
            {subjects.map((subject) => (
                <SubjectItem
                    subject={subject}
                    key={subject.id}
                />
                // <ListItemCard
                //     id={subject.id}
                //     key={subject.id}
                //     title={subject.name}
                //     onEditClick={openFormEdit}
                //     previewUrl={`${organizationId}/subjects/${subject.id}`}
                // />
            ))}
        </Box>
    );
}

export default SubjectList;
