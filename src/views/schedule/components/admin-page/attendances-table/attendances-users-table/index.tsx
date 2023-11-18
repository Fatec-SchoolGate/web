import { Dialog } from "@mui/material";
import { useAttendancesUsersTable } from "./store";
import { useScheduleId } from "@/views/schedule/utils/use-schedule-id";
import { useScheduleGroupedAttendances } from "@/views/schedule/api/get-schedule-grouped-attendances";
import { useMemo } from "react";
import UsersTable from "./table";

const AttendancesUsersTable = () => {
    const { attendanceDate, closeModal } = useAttendancesUsersTable();

    return (
        <Dialog
            open={!!attendanceDate}
            onClose={closeModal}
            PaperProps={{
                sx: {
                    width: "90vw",
                    maxWidth: "none"
                }
            }}
        >
            <UsersTable/>
        </Dialog>
    );
}

export default AttendancesUsersTable;