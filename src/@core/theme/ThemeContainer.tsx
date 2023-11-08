// ** React Imports
import { ReactNode, useMemo } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

import useThemeOptions from './use-theme-options'

import GlobalStyling from './globalStyles'

interface Props {
  children: ReactNode;
};

const ThemeContainer = (props: Props) => {
  const { children } = props;

  const palette = useThemeOptions();

  const theme = useMemo(() => {
    let theme = createTheme(palette);
  
    return responsiveFontSizes(theme);
  }, [palette]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
}

export default ThemeContainer;
