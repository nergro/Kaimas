import { ReactComponent as CloseSvg } from 'assets/Close.svg';
import React from 'react';
import styled from 'styled-components/macro';

const CloseButton = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 25px;
  background: ${props => props.theme.colors.background.primary}; // TODO double check
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;
  &:hover {
    opacity: 0.98; // TODO need new hover style
  }
  border-radius: 50%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 25px;
    height: 25px;
    margin-right: 12px;
  }
`;

const CloseIcon = styled(CloseSvg)`
  width: 40px;
  height: 40px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 11.5px;
    height: 11.5px;
  }
`;

export const SearchCloseButton: React.FC = () => {
  return (
    <CloseButton>
      <CloseIcon />
    </CloseButton>
  );
};
