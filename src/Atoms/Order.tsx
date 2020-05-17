import { OrderBox } from 'Atoms/OrderBox';
import { P, Span } from 'Atoms/text';
import moment from 'moment';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Order as OrderType } from 'types/order';

const NameAndDate = styled.div`
  display: flex;
`;

const Name = styled(Span)`
  flex-grow: 1;
`;

const Date = styled(Span)``;

const Middle = styled.div`
  display: flex;
  margin-top: 10px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;

const LeftSpan = styled(Span)`
  margin-right: 8px;
  word-break: break-all;
`;

const StyledP = styled(P)`
  margin-right: 15px;
  display: flex;
  flex-wrap: wrap;
`;

interface Props {
  className?: string;
  order: OrderType;
}

export const Order: FC<Props> = ({ className, order }) => {
  const { t } = useTranslation();
  const locale = getLocale()?.value;

  let isUpcoming = false;
  const now = moment().format('LLLL');

  order.reservedDates.forEach(x => {
    if (moment(x.date).isAfter(now)) {
      isUpcoming = true;
    }
  });

  const sortedDates = order.reservedDates.sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });

  return (
    <OrderBox className={className} isUpcoming={isUpcoming}>
      <NameAndDate>
        <Name size="normal" weight="700">
          {`${t('Order nr.')} ${order.id}`}
        </Name>
        <Date size="normal">{moment(order.date).format('YYYY-MM-DD')}</Date>
      </NameAndDate>
      <Middle>
        <StyledP size="normal">
          <LeftSpan weight="600">{t('Service')}: </LeftSpan>
          <Span size="normal">{order.onModel === 'Cabin' ? t('Cabin') : t('Activity')}</Span>
        </StyledP>
        <StyledP size="normal">
          <LeftSpan weight="600">{t('Title')}:</LeftSpan>
          <Span size="normal">
            {locale === 'lt' ? order.serviceId.nameLT : order.serviceId.nameEN}
          </Span>
        </StyledP>
        <StyledP size="normal">
          <LeftSpan weight="600">{t('Price')}:</LeftSpan>
          <Span size="normal">{order.price} €</Span>
        </StyledP>
      </Middle>
      <StyledP size="normal" weight="600">
        {t('Reserved dates')}:
      </StyledP>
      {sortedDates.map(x => (
        <P key={x.id}>{moment(x.date).format('YYYY-MM-DD')}</P>
      ))}
    </OrderBox>
  );
};
