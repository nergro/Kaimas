import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

import { ModalCardHeader } from './ModalCardHeader';

const ModalCardBody = styled.div`
  font: ${props => props.theme.fonts.normalText};
  padding: 10px 14px 20px;
  color: ${props => props.theme.colors.text.main};
  background-color: #4f4f4f;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
`;

const ModalCardWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 1000px;
`;

interface ModalCardProps {
  className?: string;
  onClick?: () => void;
  title: string;
  subTitle?: string;
  children: ReactNode;
}

export const ModalCard: FC<ModalCardProps> = ({
  className,
  onClick,
  title,
  subTitle,
  children,
}) => {
  return (
    <ModalCardWrapper className={className}>
      <ModalCardHeader title={title} subTitle={subTitle} onClick={onClick} />
      <ModalCardBody>{children}</ModalCardBody>
    </ModalCardWrapper>
  );
};
