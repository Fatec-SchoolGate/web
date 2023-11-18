import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import Actions from "./actions";

export const useColumns = (): GridColDef[] => {
	const { t } = useTranslation();

	return [
		{
			field: "date",
			headerName: `${t("date")}`,
			flex: 3,
			minWidth: 150
		},
		{
			field: "attendances",
			headerName: `${t("attendances")}`,
			flex: 1,
			minWidth: 50,
			align: "right",
			renderCell: (params) => {
				const { row } = params;

				return row.attendances.length;
			}
		},
		{
			field: "actions",
			headerName: `${t("AÇÕES")}`,
			flex: 1,
			minWidth: 50,
			renderCell: (params) => {
				const { row } = params;
				
				return <Actions date={row.id}/>;
			}
		}
	];
};
