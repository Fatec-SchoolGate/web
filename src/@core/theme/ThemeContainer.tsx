// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'

import themeOptions from './themeOptions'

import GlobalStyling from './globalStyles'

interface Props {
  children: ReactNode;
};

const ThemeContainer = (props: Props) => {
  const { children } = props;

  let theme = createTheme(themeOptions());

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  );
}

export default ThemeContainer;
