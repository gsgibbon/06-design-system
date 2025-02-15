import styled, { css } from "styled-components"
import { theme } from "../styles/themes"

const sizeVariants = {
  sm: css`
    font-size: ${theme.fontSizes.xs};
  `,
  md: css`
    font-size: ${theme.fontSizes["2xl"]};
  `,
  lg: css`
    font-size: ${theme.fontSizes["4xl"]};
  `,
  '2xl': css`
    font-size: ${theme.fontSizes["5xl"]};
  `,
  '3xl': css`
    font-size: ${theme.fontSizes["6xl"]};
  `,
  '4xl': css`
    font-size: ${theme.fontSizes["7xl"]};
  `,
  '5xl': css`
    font-size: ${theme.fontSizes["8xl"]};
  `,
  '6xl': css`
    font-size: ${theme.fontSizes["9xl"]};
  `,
}

export const Heading = styled.h2<{ size: keyof typeof sizeVariants }>`
  font-family: ${theme.fonts.default};
  line-height: ${theme.lineHeights.shorter};
  margin: 0;
  color: ${theme.colors.gray100};

  ${({ size }) => sizeVariants[size]};
`

Heading.defaultProps = {
  size: 'md',
}

Heading.displayName = "Heading"