import { Pagination } from "@mui/material";
import {
	gridPageCountSelector,
	gridPageSelector,
	useGridApiContext,
	useGridSelector
} from "@mui/x-data-grid";
import { useBreakpoint } from "@/@core/hooks/use-breakpoints";

interface Props {
	reduceSizeOnWidth?: number;
}

const PaginationDataGrid = (props: Props) => {
	const { reduceSizeOnWidth = 500 } = props;

	const apiRef = useGridApiContext();
	const page = useGridSelector(apiRef, gridPageSelector);
	const pageCount = useGridSelector(apiRef, gridPageCountSelector);
	const handlePageChange = (_: unknown, page: number) =>
		apiRef.current.setPage(page - 1);

	const shouldReduceSize = useBreakpoint("down", reduceSizeOnWidth);

	return (
		<Pagination
			count={pageCount}
			page={page + 1}
			onChange={handlePageChange}
			boundaryCount={shouldReduceSize ? 0 : 1}
			siblingCount={shouldReduceSize ? 0 : 1}
		/>
	);
};

export default PaginationDataGrid;
