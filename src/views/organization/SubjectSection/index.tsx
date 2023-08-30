import { Card } from "@mui/material";
import Header from "./components/Header";
import Form from "./components/Form";
import SubjectList from "./components/SubjectList";

const SubjectSection = () => {
    return (
        <Card
            sx={{
                p: (theme) => theme.spacing(4)
            }}
        >
            <Header/>
            <SubjectList/>
            <Form/>
        </Card>
    );
}

export default SubjectSection;