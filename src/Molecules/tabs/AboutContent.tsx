import { P, Span } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const Wrapper = styled.div``;

const Paragraph = styled(P)`
  margin-top: 20px;
  &:first-child {
    margin: 0;
  }
`;

const StyledP = styled(P)`
  margin-bottom: 10px;
`;

const StyledSpan = styled(Span)`
  margin-right: 5px;
`;

interface Props {
  className?: string;
  price: number;
  capacity: number;
  address: string;
  description: string;
}

export const AboutContent: FC<Props> = ({ className, price, capacity, address, description }) => {
  const { t } = useTranslation();
  return (
    <Wrapper className={className}>
      <Paragraph>
        <StyledSpan weight="600">{t('Price')}: </StyledSpan>
        <Span>{price} €</Span>
      </Paragraph>
      <Paragraph>
        <StyledSpan weight="600">{t('Capacity')}: </StyledSpan>
        <Span>{capacity}</Span>
      </Paragraph>
      <Paragraph>
        <StyledSpan weight="600">{t('Address')}: </StyledSpan>
        <Span>{address}</Span>
      </Paragraph>
      <Paragraph weight="600">{t('Description')}:</Paragraph>
      {description.split('.').map((x, i) => (
        <StyledP key={i}>{x}</StyledP>
      ))}
    </Wrapper>
  );
};
