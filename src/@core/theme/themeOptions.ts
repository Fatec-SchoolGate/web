import { PaletteMode, ThemeOptions } from '@mui/material'

import palette from './palette'
import spacing from './spacing'
import shadows from './shadows'
import typography from './typography'
import breakpoints from './breakpoints'
import overrides from './overrides'
import { useSettingsStore } from '../stores/settingsStore'

const themeOptions = (customMode?: "dark" | "light"): ThemeOptions => {

  const {
    mode
  } = useSettingsStore();
  
  const theme: ThemeOptions = {
    breakpoints: breakpoints(),
    components: overrides(),
    palette: palette(customMode ?? mode),
    ...spacing,
    shape: {
      borderRadius: 6
    },
    mixins: {
      toolbar: {
        minHeight: 64
      }
    },
    shadows: shadows(mode),
    typography
  }

  return theme;
}

export default themeOptions
