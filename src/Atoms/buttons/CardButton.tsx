import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledButton = styled.button`
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  text-decoration: underline;
  color: ${props => props.theme.colors.card.link};
  &:hover {
    color: ${props => props.theme.colors.card.linkHover};
  }
`;

interface Props {
  className?: string;
  onClick?(): void;
  children: string;
}

export const CardButton: FC<Props> = ({ className, onClick, children }) => {
  return (
    <StyledButton className={className} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
