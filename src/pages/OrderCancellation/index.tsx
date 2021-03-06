import { doOrderCancellation } from 'apiServices/orders/orders';
import { Loader } from 'Atoms/Loader';
import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
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
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 16px rgba(255, 255, 255, 0.3);
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

type CancelState = 'cancelled' | 'error' | 'initial';

export const OrderCancellation: FC<RouteComponentProps<{ token: string }>> = ({ match }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cancelStatus, setCancelStatus] = useState<CancelState>('initial');

  useEffect(() => {
    const makeCancellation = async (): Promise<void> => {
      setIsLoading(true);
      const res = await doOrderCancellation(match.params.token);
      setCancelStatus(res ? 'cancelled' : 'error');
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
  if (cancelStatus === 'error') {
    return <Redirect to="/404" />;
  }

  return (
    <MainLayout>
      <NotFoundPage>
        <TextContainer>
          <TitleStyled weight="600" font="Poppins" size="veryBig" color="main" lineHeight="unset">
            {cancelStatus === 'cancelled'
              ? t('Your order cancellation were successful!')
              : t('Your order cancellation were not successful!')}
          </TitleStyled>
        </TextContainer>
      </NotFoundPage>
    </MainLayout>
  );
};
