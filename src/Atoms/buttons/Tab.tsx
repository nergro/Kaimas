import React, { FC } from 'react';
import styled from 'styled-components';

interface Props {
  className?: string;
  active?: boolean;
  onClick?(): void;
  children: string;
}

const TabBase: FC<Props> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const Tab = styled(TabBase)`
  padding: 8px 16px;
  background: ${props =>
    props.active ? props.theme.colors.tab.backgroundActive : props.theme.colors.tab.background};
  color: ${props =>
    props.active ? props.theme.colors.tab.textActive : props.theme.colors.tab.text};
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  font: ${props => props.theme.fonts.tinyTextBold};
`;
