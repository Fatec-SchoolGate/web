import { Card } from "@mui/material";
import Header from "./header";
import AttendancesTable from "./attendances-table";

const AdminPage = () => {
    return (
        <Card>
            <Header/>
            <AttendancesTable/>
        </Card>
    );
}

export default AdminPage;