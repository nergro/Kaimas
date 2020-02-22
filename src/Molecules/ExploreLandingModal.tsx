import { contentClassNames, Modal } from 'Atoms/Modal';
import { Scrollbar } from 'Atoms/Scrollbar';
import { H2, H3 } from 'Atoms/text';
import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';

import { ModalCloseButton } from './buttons/ModalCloseButton';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  subTitle?: string;
}

const StyledModal = styled(Modal)`
  .${contentClassNames.base} {
    position: relative;
    background: ${props => props.theme.colors.background.primary};
    width: 80%;
    height: 80%;
    padding: 2% 4.5%;
    overflow: auto;
    ${Scrollbar};
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      width: 100%;
      height: 100%;
    }
  }
`;

const Title = styled(H2).attrs(() => ({
  font: 'Inter',
  weight: '500',
}))`
  margin: 44px 0 53px 0;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin: 20px 0 18px 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin: 23px 0;
  }
`;

const SubTitle = styled(H3).attrs(() => ({
  font: 'Inter',
  weight: '500',
}))`
  color: #000000;
  margin: -33px 0 37px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin: -10px 0 18px 0;
  }
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExploreLandingModal: React.FC<Props> = ({
  isOpen,
  onClose,
  children,
  title,
  subTitle,
}) => {
  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <ModalCloseButton onClick={onClose} />
      {title && <Title>{title}</Title>}
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Content>{children}</Content>
    </StyledModal>
  );
};
