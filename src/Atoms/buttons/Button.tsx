import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick?(): void;
}

const ButtonBase: FC<ButtonProps> = ({ className, children, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const Button = styled(ButtonBase)`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font: ${props => props.theme.fonts.normalTextSemiBold};
  background: ${props => props.theme.colors.button.default.backgroundColor};
  color: ${props => props.theme.colors.button.default.textColor};
  transition: all 0.3s ease 0s;
  &:hover {
    background: ${props => props.theme.colors.button.hover.backgroundColor};
  }

  &:active {
    background: ${props => props.theme.colors.button.active.backgroundColor};
  }
`;
