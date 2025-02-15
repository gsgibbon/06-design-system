import styled from "styled-components"
import { theme } from "../styles/themes"

export const TextArea = styled.textarea`
  background-color: ${ theme.colors.gray900 };
  padding: ${ theme.space[3] } ${ theme.space[4] };
  border-radius: ${ theme.radii.sm};
  box-sizing: border-box;
  border: 2px solid ${ theme.colors.gray900 };

  font-family: ${ theme.fonts.default };
  font-size: ${ theme.fontSizes.sm };
  color: ${ theme.colors.white };
  font-weight: ${ theme.fontWeights.regular };
  resize: vertical;
  min-height: 80px;

  &:focus {
    outline: 0;
    border-color: ${ theme.colors.green300 };
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &::placeholder {
    color: ${ theme.colors.gray400 };
  }
`

TextArea.displayName = "TextArea"