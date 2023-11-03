import { useMediaQuery } from "@mui/material";

export const useBreakpoint = (
	breakpointMode: "down" | "up" | "between",
	value: number | [number, number]
) => {
	let mediaQuery: string;

	if (breakpointMode == "down") {
		mediaQuery = `(max-width: ${value}px)`;
	} else if (breakpointMode == "up") {
		mediaQuery = `(min-width: ${value}px)`;
	} else {
		if (Array.isArray(value) && value.length == 2) {
			mediaQuery = `(min-width: ${value[0]}px) and (max-width: ${value[1]}px)`;
		} else {
			mediaQuery = `(min-width: 0px) and (max-width: ${value}px)`;
		}
	}

	return useMediaQuery(mediaQuery);
};
