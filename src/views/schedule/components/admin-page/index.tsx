import { Card, Divider } from "@mui/material";
import Header from "./header";
import AttendancesTable from "./attendances-table";

const AdminPage = () => {
    return (
        <Card>
            <Header/>
            <Divider/>
            <AttendancesTable/>
        </Card>
    );
}

export default AdminPage;