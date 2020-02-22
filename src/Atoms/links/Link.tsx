import React, { FC } from 'react';
import styled from 'styled-components';
import { Link as LinkComp } from 'react-router-dom';

const StyledLink = styled(LinkComp)`
  text-decoration: none;
  color: ${props => props.theme.colors.link.default};
  &:hover {
    color: ${props => props.theme.colors.link.hover};
  }
`;

interface Props {
  className?: string;
  to: string;
  children: string;
}

export const Link: FC<Props> = ({ className, to, children }) => {
  return (
    <StyledLink className={className} to={to}>
      {children}
    </StyledLink>
  );
};
