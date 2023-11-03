import { Box, MenuItem, TextField, Typography } from "@mui/material";
import {
	gridPageSizeSelector,
	useGridApiContext,
	useGridSelector
} from "@mui/x-data-grid";
import { ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

const RowsPerPageSelector = () => {
	const { t } = useTranslation();
	const apiRef = useGridApiContext();
	const rowsPerPage = useGridSelector(apiRef, gridPageSizeSelector);

	const handleRowsPerPageChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const value = event.target.value;
		apiRef.current.setPageSize(parseInt(value));
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: {
					xs: "column",
					sm: "row"
				},
				alignItems: {
					xs: "left",
					sm: "center"
				},
				gap: 2,
				width: {
					xs: "100%",
					sm: "fit-content"
				}
			}}
		>
			<Typography>{t("Exibir")}</Typography>
			<TextField
				size={"small"}
				value={rowsPerPage}
				onChange={handleRowsPerPageChange}
				select
				fullWidth
			>
				<MenuItem value={5}>5</MenuItem>
				<MenuItem value={10}>10</MenuItem>
				<MenuItem value={25}>25</MenuItem>
				<MenuItem value={50}>50</MenuItem>
				<MenuItem value={100}>100</MenuItem>
			</TextField>
		</Box>
	);
};

export default RowsPerPageSelector;
