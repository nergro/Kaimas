import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
`;

const TitleStyled = styled(H1)`
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font: ${props => props.theme.fonts.HeaderBold};
    margin: 0 0 20px 0;
  }
  @media (min-width: ${props => props.theme.breakpoints.s}) and (max-width: ${props =>
      props.theme.breakpoints.m}) {
    margin: 0 0 30px 0;
  }
  @media (min-width: ${props => props.theme.breakpoints.m}) {
    margin: 0 0 40px 0;
  }
`;

export const ErrorPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <NotFoundPage>
        <TextContainer>
          <TitleStyled weight="600" font="Poppins" size="veryBig" color="main" lineHeight="unset">
            {t('Sorry! Something went wrong... :(')}
          </TitleStyled>
        </TextContainer>
      </NotFoundPage>
    </MainLayout>
  );
};
