import { Box, Typography } from "@mui/material";
import {
	gridPaginationRowRangeSelector,
	gridRowCountSelector,
	useGridApiContext,
	useGridSelector
} from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import PaginationDataGrid from "@/@core/components/table/PaginationDataGrid";

const Footer = () => {
	const { t } = useTranslation();
	const apiRef = useGridApiContext();

	const rowCount = useGridSelector(apiRef, gridRowCountSelector);
	const rowRange = useGridSelector(apiRef, gridPaginationRowRangeSelector);

	return (
		<Box
			sx={{
				width: "100%",
				mx: 10,
				my: 5,
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				gap: 5,
				flexDirection: {
					xs: "column-reverse",
					md: "row"
				}
			}}
		>
			<Typography>
				{t("showingNofNAttendance", {
					fromRow: rowRange ? rowRange?.firstRowIndex + 1 : 0,
					toRow: rowRange ? rowRange?.lastRowIndex + 1 : 0,
					rowCount: rowCount
				})}
			</Typography>
			<PaginationDataGrid />
		</Box>
	);
};

export default Footer;
