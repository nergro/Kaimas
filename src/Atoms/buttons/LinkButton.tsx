import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${props => props.theme.colors.link.default};
  font: ${props => props.theme.fonts.mediumText};
  &:hover {
    color: ${props => props.theme.colors.link.hover};
  }
`;

interface Props {
  className?: string;
  onClick?(): void;
  children: string;
}

export const LinkButton: FC<Props> = ({ className, onClick, children }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
