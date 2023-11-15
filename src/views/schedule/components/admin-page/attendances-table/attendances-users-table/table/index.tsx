import { Box, Skeleton } from "@mui/material";
import { Suspense, lazy, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useColumns } from "./columns";
import Footer from "./footer";
import Header from "./header";
import { map } from "lodash";
import { UserDto } from "@/@core/dto/userDto";

interface UsersTableProps {
    users: UserDto[];
}

const DataGrid = lazy(() =>
	import("@mui/x-data-grid").then((module) => ({ default: module.DataGrid }))
);

const LoadingFallback = () => <Skeleton variant='rectangular' height={600} />;

const UsersTable = (props: UsersTableProps) => {
    const { users } = props;

	const { t } = useTranslation();

	const columns = useColumns();

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
					rows={users}
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
