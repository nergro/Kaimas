import { H2 } from 'Atoms/text';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledH2 = styled(H2)`
  text-align: left;
  &:hover {
    color: ${props => props.theme.colors.text.inactive};
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    text-align: center;
  }
`;

interface Props {
  className?: string;
  to: string;
  children: string;
}

export const ListTitleLink: FC<Props> = ({ className, to, children }) => {
  return (
    <StyledLink className={className} to={to}>
      <StyledH2>{children}</StyledH2>
    </StyledLink>
  );
};
