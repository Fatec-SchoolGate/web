import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import Actions from "./actions";

export const useColumns = (): GridColDef[] => {
	const { t } = useTranslation();

	return [
		{
			field: "name",
			headerName: `${t("name")}`,
			flex: 2,
			minWidth: 150
		},
		// {
		// 	field: "actions",
		// 	headerName: `${t("AÇÕES")}`,
		// 	flex: 1,
		// 	minWidth: 50,
		// 	renderCell: (params) => {
		// 		const { row } = params;
				
		// 		return <Actions date={row.id}/>;
		// 	}
		// }
	];
};
