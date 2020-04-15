import { doCancellation } from 'apiServices/subscribe/subscribe';
import { Loader } from 'Atoms/Loader';
import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { NotFoundImage } from 'Molecules/NotFoundImage';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components/macro';

const NotFoundPage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 100px 10px 32px;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) and (min-width: ${props =>
      props.theme.breakpoints.m}) {
    padding: 100px 20px 32px;
  }
  @media (min-width: ${props => props.theme.breakpoints.l}) {
    padding: 100px 48px 32px;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto 40%;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;

const NotFoundImageStyled = styled(NotFoundImage)`
  width: 100%;
  justify-self: end;

  @media (min-width: ${props => props.theme.breakpoints.s}) {
    grid-row: 1 / 3;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    grid-row: 1 / 2;
  }
`;

const TitleStyled = styled(H1)`
  text-align: unset;

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

export const SubscribeCancellation: FC<RouteComponentProps<{ token: string }>> = ({ match }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cancelSuccess, setCancelSuccess] = useState<boolean>(false);

  useEffect(() => {
    const makeCancellation = async (): Promise<void> => {
      setIsLoading(true);
      const res = await doCancellation(match.params.token);
      setCancelSuccess(res);
      setIsLoading(false);
    };
    makeCancellation();
  }, [match.params.token]);

  if (isLoading) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <NotFoundPage>
        <GridSection>
          <NotFoundImageStyled />
          <TextContainer>
            <TitleStyled weight="600" font="Poppins" size="veryBig" color="main" lineHeight="unset">
              {cancelSuccess
                ? t('Your cancellation were successful!')
                : t('Your cancellation were not successful! :(')}
            </TitleStyled>
          </TextContainer>
        </GridSection>
      </NotFoundPage>
    </MainLayout>
  );
};
