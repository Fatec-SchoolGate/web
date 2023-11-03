import { Card } from "@mui/material";
import AttendancesTable from "./components/attendances-table";
import Header from "./components/header";

const ScheduleContainer = () => {
    return (
        <Card>
            <Header/>
            <AttendancesTable/>
        </Card>
    );
}

export default ScheduleContainer;