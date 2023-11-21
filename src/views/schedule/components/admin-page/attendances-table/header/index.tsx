import { Box, Typography } from "@mui/material";
import RowsPerPageSelector from "@/@core/components/table/RowsPerPageSelector";
import SearchBarDataGrid from "@/@core/components/table/SearchBarDataGrid";
import { useTranslation } from "react-i18next";

const Header = () => {
	const { t } = useTranslation();

	return (
		<Box
			sx={{
				px: 4,
				py: 5,
				gap: 10,
				display: "flex",
				justifyContent: "right",
				flexDirection: "column"
			}}
		>
			<Typography variant={"h4"}>{t("attendancesTable")}</Typography>
			{/* <Box
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
					searchItems={[
						{ field: "date", operator: "contains" }
					]}
				/>
			</Box> */}
		</Box>
	);
};

export default Header;
