import { Box, Skeleton } from "@mui/material";
import { Suspense, lazy, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useColumns } from "./columns";
// import { usePlans } from "../../api/get-plans";
import Footer from "./footer";
import Header from "./header";
import { useScheduleGroupedAttendances } from "@/views/schedule/api/get-schedule-grouped-attendances";
import { useScheduleId } from "@/views/schedule/utils/use-schedule-id"; 
import { map } from "lodash";
import AttendancesUsersTable from "./attendances-users-table";

const DataGrid = lazy(() =>
	import("@mui/x-data-grid").then((module) => ({ default: module.DataGrid }))
);

const LoadingFallback = () => <Skeleton variant='rectangular' height={600} />;

const AttendancesTable = () => {
	const { t } = useTranslation();

	const columns = useColumns();

	const scheduleId = useScheduleId();
	const { data: response, isLoading } = useScheduleGroupedAttendances(scheduleId);
	const groupedAttendances = response?.data.groupedAttendances;

	const formattedGroupedAttendances = useMemo(() => map(groupedAttendances, (value, key) => ({ id: key, date: key, attendances: value.attendances, users: value.users })), [groupedAttendances]);

	if (isLoading) {
		return <LoadingFallback />;
	}

	return (
		<Box
			sx={{
				height: 600
			}}
		>
			<Suspense fallback={<LoadingFallback />}>
				<DataGrid
					disableColumnMenu
					rowSelection={false}
					columns={columns}
					rows={formattedGroupedAttendances}
					localeText={{
						noRowsLabel: `${t("noPlansFound")}`,
						noResultsOverlayLabel: `${t("noPlansFound")}`
					}}
					slots={{
						pagination: Footer,
						toolbar: Header
					}}
					initialState={{
						pagination: {
							paginationModel: {
								pageSize: 10
							}
						}
					}}
				/>
			</Suspense>
			<AttendancesUsersTable/>
		</Box>
	);
};

export default AttendancesTable;
