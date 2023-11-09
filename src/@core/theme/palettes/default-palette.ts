import { Palette, alpha, hexToRgb } from "@mui/material";

const backgroundContrastColor = "#d0d4f1"

export const defaultPalette: Partial<Palette> = {
    common: {
        black: '#000',
        white: "#fff"
    },
    primary: {
        light: '#e18147',
        main: '#692ebd',
        dark: '#c7672d',
        contrastText: "#fff"
    },
    secondary: {
        light: '#B2B4B8',
        main: '#e3d6f5',
        dark: '#949699',
        contrastText: "#fff"
    },
    error: {
        light: '#ED6F70',
        main: '#EA5455',
        dark: '#CE4A4B',
        contrastText: "#fff"
    },
    warning: {
        light: '#FFAB5A',
        main: '#FF9F43',
        dark: '#E08C3B',
        contrastText: "#fff"
    },
    info: {
        light: '#1FD5EB',
        main: '#00CFE8',
        dark: '#00B6CC',
        contrastText: "#fff"
    },
    success: {
        light: '#42CE80',
        main: '#28C76F',
        dark: '#23AF62',
        contrastText: "#fff"
    },
    grey: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#EEEEEE',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#9E9E9E',
        600: '#757575',
        700: '#616161',
        800: '#424242',
        900: '#212121',
        A100: '#F5F5F5',
        A200: '#EEEEEE',
        A400: '#BDBDBD',
        A700: '#616161'
    },
    text: {
        primary: alpha(hexToRgb(backgroundContrastColor), 0.78),
        secondary: alpha(hexToRgb(backgroundContrastColor), 0.68),
        disabled: alpha(hexToRgb(backgroundContrastColor), 0.42)
    },
    divider: alpha(hexToRgb(backgroundContrastColor), 0.16),
    background: {
        paper: "#2F3649",
        default: "#25293C"
    },
    action: {
        active: alpha(hexToRgb(backgroundContrastColor), 0.54),
        hover: alpha(hexToRgb(backgroundContrastColor), 0.04),
        selected: alpha(hexToRgb(backgroundContrastColor), 0.06),
        selectedOpacity: 0.06,
        disabled: alpha(hexToRgb(backgroundContrastColor), 0.26),
        disabledBackground: alpha(hexToRgb(backgroundContrastColor), 0.12),
        focus: alpha(hexToRgb(backgroundContrastColor), 0.12),
        hoverOpacity: 0.06,
        disabledOpacity: 0.06,
        focusOpacity: 0.06,
        activatedOpacity: 0.06
    }
}