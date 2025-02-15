import styled from "styled-components"
import { theme } from "../styles/themes"

export const Box = styled.div`
  padding: ${theme.space[6]};
  border-radius: ${theme.radii.md};
  border: 1px solid ${theme.colors.gray600};
  background-color: ${theme.colors.gray800};
`
Box.displayName = "Box"