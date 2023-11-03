import { Dialog } from "@mui/material";
import { useAttendancesUsersTable } from "./store";
import { useScheduleId } from "@/views/schedule/utils/use-schedule-id";
import { useScheduleGroupedAttendances } from "@/views/schedule/api/get-schedule-grouped-attendances";
import { useMemo } from "react";

const AttendancesUsersTable = () => {
    const { attendanceDate, closeModal } = useAttendancesUsersTable();

    const scheduleId = useScheduleId();
	const { data: response, isLoading } = useScheduleGroupedAttendances(scheduleId);
	const groupedAttendances = response?.data.groupedAttendances;

    const users = useMemo(() => {
        if (!groupedAttendances || !attendanceDate) return [];

        return groupedAttendances[attendanceDate].users;
    }, [groupedAttendances, attendanceDate]);

    return (
        <Dialog
            open={!!attendanceDate}
            onClose={closeModal}
        >
            {attendanceDate}
        </Dialog>
    );
}

export default AttendancesUsersTable;