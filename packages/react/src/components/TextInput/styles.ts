import styled from "styled-components"
import { theme } from "../../styles/themes"
import { css } from "styled-components";

const sizeVariants = {
  sm: css`
    padding: ${ theme.space[2] } ${ theme.space[3] };
  `,
  md: css`
    padding: ${ theme.space[3] } ${ theme.space[4] };
  `,
};

export const TextInputContainer = styled.div<{ size?: keyof typeof sizeVariants }>`
  background-color: ${ theme.colors.gray900 };
  border-radius: ${ theme.radii.sm };
  box-sizing: border-box;
  border: 2px solid ${ theme.colors.gray900 };

  ${({size = 'md'}) => sizeVariants[size]};

  display: flex;
  align-items: center;

  &:has(input:focus) {
    border-color: ${ theme.colors.green300 };
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Prefix = styled.span`
  font-family: ${ theme.fonts.default };
  font-size: ${ theme.fontSizes.sm };
  color: ${ theme.colors.gray400 };
  font-weight: ${ theme.fontWeights.regular };
`;

export const Input = styled.input`
  font-family: ${ theme.fonts.default };
  font-size: ${ theme.fontSizes.sm };
  color: ${ theme.colors.white };
  font-weight: ${ theme.fontWeights.regular };
  background: transparent;
  border: 0;
  width: 100%;

  &:focus {
    outline: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${ theme.colors.gray400 };
  }
`;

TextInputContainer.defaultProps = {
  size: 'md'
}