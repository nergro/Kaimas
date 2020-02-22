import { H2, P } from 'Atoms/text';
import { ModalCloseButton } from 'Molecules/buttons/ModalCloseButton';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Header = styled.div`
  background-color: #2ab2ab;
  padding: 26px 70px 26px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const TitleStyled = styled(H2)`
  width: 100%;
  text-align: start;
  margin: 0;
`;

const SubTitleStyled = styled(P)`
  margin: 12px 0 0 0;
`;

interface ModalCardHeaderProps {
  title: string;
  subTitle?: string;
  onClick?: () => void;
}

export const ModalCardHeader: FC<ModalCardHeaderProps> = ({ title, subTitle, onClick }) => {
  return (
    <Header>
      <TitleStyled
        font="Poppins"
        color="main"
        weight="700"
        lineHeight="referenceTitle"
        size="regular"
      >
        {title}
      </TitleStyled>
      {onClick && <ModalCloseButton onClick={onClick} />}
      {subTitle && (
        <SubTitleStyled color="main" weight="700">
          {subTitle}
        </SubTitleStyled>
      )}
    </Header>
  );
};
