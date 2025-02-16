import styled from "styled-components"
import { theme } from "../../styles"
import { Text } from "../Text"

export const MultiStepContainer = styled.div``;

export const Label = styled(Text)`
  color: ${theme.colors.gray200};
  font-size: ${theme.fontSizes.xs };
`;

export const Steps = styled.div<{ size: number }>`
  display: grid;
  grid-template-columns: repeat(${({ size }) => size}, 1fr);
  gap: ${theme.space[2]};
  margin-top: ${theme.space[1]};
`;

export const Step = styled.div<{ active?: boolean }>`
  height: ${theme.space[1]};
  border-radius: ${theme.radii.px};
  background-color: ${theme.colors.gray600};

  ${({ active }) =>
    active &&
    `
    background-color: ${theme.colors.gray100};
  `}
`;