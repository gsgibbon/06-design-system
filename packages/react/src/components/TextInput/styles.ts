import styled from "styled-components"
import { theme } from "../../styles/themes"

export const TextInputContainer = styled.div`
  background-color: ${theme.colors.gray900};
  padding: ${theme.space[3]} ${theme.space[4]};
  border-radius: ${theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${theme.colors.gray900};

  display: flex;
  align-items: baseline;

  &:has(input:focus) {
    border-color: ${theme.colors.green300};
  }

  &:has(input:disabled) {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const Prefix = styled.span`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.gray400};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

export const Input = styled.input`
  font-family: ${({ theme }) => theme.fonts.default};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
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
    color: ${({ theme }) => theme.colors.gray400};
  }
`;