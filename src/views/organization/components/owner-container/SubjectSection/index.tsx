import { Box } from "@mui/material";
import Header from "./components/header";
import Form from "./components/Form";
import SubjectList from "./components/subject-list";

const SubjectSection = () => {
    return (
        <Box
            sx={{
                p: (theme) => theme.spacing(4),
                display: "flex",
                flexDirection: "column",
                gap: 4
            }}
        >
            <Header/>
            <SubjectList/>
            <Form/>
        </Box>
    );
}

export default SubjectSection;