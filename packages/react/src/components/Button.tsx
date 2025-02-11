import styled, { css } from "styled-components"
import { theme } from "../styles/themes"

const stylesVariants = {
  primary: css`
    color: ${theme.colors.white};
    background: ${theme.colors.green500};
    
    &:not(:disabled):hover {
      background: ${theme.colors.green300};
    };

    &:disabled {
      background-color: ${theme.colors.gray200};
    }
  `,

  secondary: css`
    color: ${theme.colors.green300};
    border: 2px solid ${theme.colors.green500};
    
    &:not(:disabled):hover {
      background: ${theme.colors.green500};
      color: ${theme.colors.white};
    };

    &:disabled {
      color: ${theme.colors.gray200};
      border-color: ${theme.colors.gray200};
    };
  `,
  tertiary: css`
    color: ${theme.colors.gray100};
    
    &:not(:disabled):hover {
      color: ${theme.colors.white};
    };

    &:disabled {
      color: ${theme.colors.gray600};
    };
  `,
}

const sizeVariants = {
  sm: css`
    height: 38px;
  `,

  md: css`
    height: 46px;
  `
}  

export const Button = styled.button<{
  variant: keyof typeof stylesVariants;
  size: keyof typeof sizeVariants;
}>`
  all: unset;
  border-radius: ${theme.radii.sm};
  font-size: ${theme.fontSizes.sm};
  font-weight: ${theme.fontWeights.medium};
  font-family: ${theme.fonts.default};
  text-align: center;
  min-width: 120px;
  box-sizing: border-box;
  padding: 0 ${theme.space[4]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${theme.space[2]};

  cursor: pointer;

  svg: {
    width: ${theme.space[4]};
    height: ${theme.space[4]};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${({variant}) => stylesVariants[variant]}
  ${({size}) => sizeVariants[size]}
`

Button.defaultProps = {
  variant: 'primary',
  size: 'md'
}