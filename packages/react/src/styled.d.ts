import 'styled-components'
import { theme } from './styles'

export type ThemeType = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}