import { Box, Card } from "@mui/material";
import Header from "./Header";
import Form from "./Form";
import SubjectList from "./SubjectList";

const OrganizationContainer = () => {
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

export default OrganizationContainer;