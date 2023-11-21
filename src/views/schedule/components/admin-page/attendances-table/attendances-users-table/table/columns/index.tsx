import { GridColDef } from "@mui/x-data-grid";
import { useTranslation } from "react-i18next";
import Actions from "./actions";
import { Avatar } from "@mui/material";
import OnlineCircle from "@/@core/components/ui/online-status";

export const useColumns = (): GridColDef[] => {
	const { t } = useTranslation();

	return [
		{
			field: "avatar",
			headerName: `${t("profilePhoto")}`,
			flex: 1,
			minWidth: 150,
			disableReorder: true,
			renderCell: (params) => (
				<Avatar src={`${process.env.NEXT_PUBLIC_URL}/${params.row.user?.profileImage}`}>
                    {params.row.user?.name.charAt(0)}
                </Avatar>
			)
		},
		{
			field: "name",
			headerName: `${t("name")}`,
			flex: 2
		},
		{
			field: "email",
			headerName: `${t("email")}`,
			flex: 2,
			renderCell: (params) => params.row.user.email
		},
		{
			field: "presence",
			headerName: `${t("isPresent")}`,
			flex: 1,
			renderCell: (params) => <OnlineCircle online={params.row.hasAttended ?? false}/>
		}
	];
};
