import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledLink = styled(Link)`
  text-decoration: underline;
  color: ${props => props.theme.colors.card.link};
  &:hover {
    color: ${props => props.theme.colors.card.linkHover};
  }
`;

interface Props {
  className?: string;
  to: string;
  children: string;
}

export const CardLink: FC<Props> = ({ className, to, children }) => {
  return (
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  );
};
