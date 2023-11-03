import { TextField } from "@mui/material";
import { GridFilterItem, useGridApiContext } from "@mui/x-data-grid";
import { debounce } from "lodash";
import { ChangeEvent, useCallback } from "react";
import { useTranslation } from "react-i18next";

interface Props {
	searchItems?: GridFilterItem[];
}

const SearchBarDataGrid = (props: Props) => {
	const { searchItems } = props;

	const { t } = useTranslation();
	const apiRef = useGridApiContext();

	const searchTable = (searchText: string) => {
		const filterItems = searchItems
			? searchItems.map((filter) => ({ ...filter, value: searchText }))
			: [
					{
						field: "name",
						operator: "contains",
						value: searchText
					}
			  ];

		console.log(filterItems);

		apiRef.current.setFilterModel({
			items: filterItems
		});
	};

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceSearchTable = useCallback(debounce(searchTable, 200), []);

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		const searchText = event.currentTarget?.value;
		
		debounceSearchTable(searchText);
	};

	return (
		<TextField
			size={"small"}
			placeholder={t("Pesquisar") ?? ""}
			onChange={handleSearchChange}
			fullWidth
		/>
	);
};

export default SearchBarDataGrid;
