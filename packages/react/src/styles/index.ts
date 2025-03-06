import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space
} from '@gibbon-design/tokens'

import { createGlobalStyle, styled, css, keyframes, ThemeProvider, DefaultTheme } from 'styled-components'

const theme = {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} as const

export { createGlobalStyle, styled, css, keyframes, ThemeProvider, theme}
