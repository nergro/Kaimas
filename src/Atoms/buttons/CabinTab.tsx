import React, { FC } from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
  active?: boolean;
  onClick?(): void;
  children: string;
}

const CabinTabBase: FC<Props> = ({ className, onClick, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export const CabinTab = styled(CabinTabBase)`
  padding: 18px 30px;
  background: ${props =>
    props.active
      ? props.theme.colors.cabinTab.backgroundActive
      : props.theme.colors.cabinTab.background};
  color: ${props =>
    props.active ? props.theme.colors.cabinTab.textActive : props.theme.colors.cabinTab.text};
  cursor: pointer;
  border: none;
  text-transform: uppercase;
  font: ${props => props.theme.fonts.normalTextBold};
`;
