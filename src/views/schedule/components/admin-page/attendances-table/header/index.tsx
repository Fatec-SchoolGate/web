import { Box } from "@mui/material";
import RowsPerPageSelector from "@/@core/components/table/RowsPerPageSelector";
import SearchBarDataGrid from "@/@core/components/table/SearchBarDataGrid";

const Header = () => {
	return (
		<Box
			sx={{
				px: 10,
				py: 5,
				gap: 10,
				display: "flex",
				justifyContent: "right",
				flexDirection: {
					xs: "column",
					md: "row"
				}
			}}
		>
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
					searchItems={[
						{ field: "date", operator: "contains" }
					]}
				/>
			</Box>
		</Box>
	);
};

export default Header;
