import { useSubjects } from "@/@core/api/subjects/getSubjects";
import ListItemCard from "@/@core/components/ui/ListItemCard";
import { Box, Skeleton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const SubjectList = () => {

    const { t } = useTranslation();
    const { data: response, isLoading } = useSubjects();
    const subjects = response?.data.subjects ?? [];

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
                    key={subject.id}
                    title={subject.name}
                />
            ))}
        </Box>
    );
}

export default SubjectList;