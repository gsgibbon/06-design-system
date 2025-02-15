import styled, { keyframes } from 'styled-components';
import * as Checkbox from '@radix-ui/react-checkbox';
import { theme } from '../../styles/themes';

export const CheckboxContainer = styled(Checkbox.Root)`
  all: unset;
  width: ${theme.space[6]};
  height: ${theme.space[6]};
  background-color: ${theme.colors.gray900};
  border-radius: ${theme.radii.xs};
  border: 2px solid ${theme.colors.gray900};
  line-height: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  &[data-state='checked'] {
    background-color: ${theme.colors.green300};
  }

  &:focus, &[data-state='checked'] {
    border: 2px solid ${theme.colors.green300};
  }
`;

// Animações para o indicador
const slideIn = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
`;

// Indicador do Checkbox (marcado/desmarcado)
export const CheckboxIndicator = styled(Checkbox.Indicator)`
  color: ${theme.colors.white};
  height: ${theme.space[4]};
  width: ${theme.space[4]};

  &[data-state='checked'] {
    animation: ${slideIn} 200ms ease-out;
  }
  &[data-state='unchecked'] {
    animation: ${slideOut} 200ms ease-out;
  }
`;