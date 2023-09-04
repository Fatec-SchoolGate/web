
import ListItemCard from "@/@core/components/ui/ListItemCard";
import { Box, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSubjects } from "../api/getSubjects";
import { useSubjectSectionStore } from "../store";

const SubjectList = () => {

    const { t } = useTranslation();
    const { data: response, isLoading } = useSubjects();
    const subjects = response?.data.subjects ?? [];

    const { openFormEdit } = useSubjectSectionStore();

    if (isLoading) return <Skeleton height={300}/>

    return (
        <Box>
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
                <ListItemCard
                    id={subject.id}
                    key={subject.id}
                    title={subject.name}
                    onEditClick={openFormEdit}
                />
            ))}
        </Box>
    );
}

export default SubjectList;
