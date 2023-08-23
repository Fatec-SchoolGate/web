import { useSubjects } from "@/@core/api/subjects/getSubjects";
import ListItemCard from "@/@core/components/ui/ListItemCard";
import { Box, Skeleton } from "@mui/material";

const SubjectList = () => {
    const { data: response, isLoading } = useSubjects();
    const subjects = response?.data.subjects ?? [];

    if (isLoading) return <Skeleton height={300}/>

    return (
        <Box>
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