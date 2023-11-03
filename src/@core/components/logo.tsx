import { useTheme } from "@mui/material";

interface LogoIconProps {
    width?: number;
    height?: number;
}

function LogoIcon(props: LogoIconProps) {
    const { width = 128, height = 116 } = props;

    const theme = useTheme();

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 128 116"
        >
        <path
            fill={theme.palette.primary.main}
            fillRule="evenodd"
            d="M55.898 78.522l-.445-.58L.408 6.077a2.976 2.976 0 00-.198 2.6c18.43 46.707 32.953 70.449 61.222 106.011.401.505.926.839 1.492 1.005L97.25 33.677l-15.02-.051-17.681 30.623.018.01-.488.804-.315.546-.009-.014-7.478 12.302-.38.625zm26.907-45.894l15.197.052.748.003-.289.69-34.502 82.435a2.975 2.975 0 002.15-1.114c30.76-38.393 44.896-62.656 61.288-106.065.196-.52.237-1.055.15-1.558L37.834 19.886l8.01 12.723h36.972l-.01.019zM55.802 76.753L1.066 5.291c.42-.357.946-.603 1.543-.68 47.772-6.168 75.829-6.128 122.381 0 .983.13 1.773.715 2.214 1.5L36.929 19.004l-.763.109.41.652 8.5 13.5.01-.006 18.1 31.348-7.383 12.145z"
            clipRule="evenodd"
        ></path>
        </svg>
    );
}

export default LogoIcon;
