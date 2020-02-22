import { Icon } from 'Atoms/Icon';
import styled from 'styled-components/macro';

export const InvisibleButton = styled.button`
  background: none;
  border: none;
  box-shadow: none;
  transition: all 0.1s ease-in;
  padding: 0;
  color: ${props => props.theme.colors.button.default.textColor};
  &:hover {
    border: none;
    background: none;
    color: ${props => props.theme.colors.button.hover.textColor};
  }
  ${Icon} {
    fill: ${props => props.theme.colors.button.default.textColor};
    &:hover {
      fill: ${props => props.theme.colors.button.hover.textColor};
    }
  }
`;
