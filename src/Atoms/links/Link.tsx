import React, { FC } from 'react';
import { Link as LinkComp } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledLink = styled(LinkComp)`
  text-decoration: none;
  text-transform: uppercase;
  color: ${props => props.theme.colors.link.default};
  font: ${props => props.theme.fonts.mediumText};
  &:hover {
    color: ${props => props.theme.colors.link.hover};
  }
`;

interface Props {
  className?: string;
  to: string;
  children: string;
  onClick?(): void;
}

export const Link: FC<Props> = ({ className, to, children, onClick }) => {
  return (
    <StyledLink className={className} to={to} onClick={onClick}>
      {children}
    </StyledLink>
  );
};
