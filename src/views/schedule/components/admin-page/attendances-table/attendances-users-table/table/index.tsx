import { Box, Skeleton } from "@mui/material";
import { Suspense, lazy, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useColumns } from "./columns";
import Footer from "./footer";
import Header from "./header";
import { useCurrentSchedule } from "@/views/schedule/utils/use-current-schedule";
import { useScheduleGroupedAttendances } from "@/views/schedule/api/get-schedule-grouped-attendances";
import { useAttendancesUsersTable } from "../store";

const DataGrid = lazy(() =>
	import("@mui/x-data-grid").then((module) => ({ default: module.DataGrid }))
);

const LoadingFallback = () => <Skeleton variant='rectangular' height={600} />;

const UsersTable = () => {
	const { t } = useTranslation();

	const columns = useColumns();

	const { attendanceDate } = useAttendancesUsersTable();

	const { schedule } = useCurrentSchedule();

	const users = schedule?.users ?? [];

	const { data: response, isLoading } = useScheduleGroupedAttendances(schedule?.id);
	const groupedAttendances = response?.data.groupedAttendances;

    const attendedUsers = useMemo(() => {
        if (!groupedAttendances || !attendanceDate) return [];

        return groupedAttendances[attendanceDate].users;
    }, [groupedAttendances, attendanceDate]);

	const mergedUsers = useMemo(() => {
		return users.map((user) => {
			const response: any = { ...user };
			const hasAttended = attendedUsers.find((attendedUser) => attendedUser.id === user.user.id);
			response.hasAttended = !!hasAttended;
			response.name = user.user.name;

			return response;
		});
	}, [users, attendedUsers]);
	console.log(mergedUsers);
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
					rows={mergedUsers}
					localeText={{
						noRowsLabel: `${t("noUsersFound")}`,
						noResultsOverlayLabel: `${t("noUsersFound")}`
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
		</Box>
	);
};

export default UsersTable;
