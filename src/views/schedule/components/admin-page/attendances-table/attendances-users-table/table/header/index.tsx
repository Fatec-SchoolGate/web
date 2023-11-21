import { Box, Typography } from "@mui/material";
import RowsPerPageSelector from "@/@core/components/table/RowsPerPageSelector";
import SearchBarDataGrid from "@/@core/components/table/SearchBarDataGrid";
import { useTranslation } from "react-i18next";
import { useAttendancesUsersTable } from "../../store";

const Header = () => {
	const { t } = useTranslation();

	const { attendanceDate } = useAttendancesUsersTable();

	return (
		<Box
			sx={{
				px: 10,
				py: 5,
				gap: 10,
				display: "flex",
				justifyContent: "right",
				flexDirection: "column"
			}}
		>
			<Typography variant={"h4"}>{t("presences")} {attendanceDate ? new Date(Date.parse(attendanceDate)).toLocaleString("pt-BR", { dateStyle: "short" }) : ""}</Typography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					flex: 2,
					gap: 10,
					flexDirection: {
						xs: "column",
						sm: "row"
					}
				}}
			>
				<RowsPerPageSelector />
				<SearchBarDataGrid
					// searchItems={[
					// 	{ field: "user.name", operator: "contains" }
					// ]}
				/>
			</Box>
		</Box>
	);
};

export default Header;
