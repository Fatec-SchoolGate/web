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
			minWidth: 150,
			renderCell: (params) => {
				const date = new Date(Date.parse(params.row.date));
				const longDate = date.toLocaleString("pt-BR", {
					// weekday: "long",
					// year: "numeric",
					// month: "long",
					dateStyle: "long"
				});

				return longDate;
			}
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
			headerName: `${t("actions")}`,
			flex: 1,
			minWidth: 50,
			renderCell: (params) => {
				const { row } = params;
				
				return <Actions date={row.id}/>;
			}
		}
	];
};
