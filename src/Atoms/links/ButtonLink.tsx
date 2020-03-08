import React, { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  to: string;
  outline?: boolean;
}

const ButtonLinkBase: FC<ButtonProps> = ({ className, children, to }) => {
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export const ButtonLink = styled(ButtonLinkBase)`
  text-decoration: none;
  border: ${props =>
    props.outline ? `2px solid ${props.theme.colors.button.default.borderColor}` : 'none'};
  padding: 10px 20px;
  cursor: pointer;
  font: ${props => props.theme.fonts.normalTextSemiBold};
  background: ${props =>
    props.outline ? 'none' : props.theme.colors.button.default.backgroundColor};
  color: ${props =>
    props.outline ? props.theme.colors.text.warning : props.theme.colors.button.default.textColor};
  transition: all 0.3s ease 0s;
  &:hover {
    background: ${props =>
      props.outline
        ? props.theme.colors.button.default.backgroundColor
        : props.theme.colors.button.hover.backgroundColor};

    color: ${props => props.theme.colors.button.default.textColor};
  }

  &:active {
    background: ${props => props.theme.colors.button.active.backgroundColor};
  }
`;
