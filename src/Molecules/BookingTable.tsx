import { Button } from 'Atoms/buttons/Button';
import { IncreaseButton } from 'Atoms/buttons/IncreaseButton';
import { Tab } from 'Atoms/buttons/Tab';
import { DatePicker } from 'Atoms/DatePicker';
import {
  InputLabel,
  NumberInput,
  NumberInputWrapper,
  PriceInputWrapper,
} from 'Molecules/CabinListFilter';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const Tabs = styled.div`
  display: flex;
`;

const StyledTab = styled(Tab)``;

const Wrapper = styled.div`
  width: 60%;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 80%;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 80%;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

const Form = styled.form`
  background: ${props => props.theme.colors.background.primary};
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledPicker = styled(DatePicker)`
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin-top: 20px;
  align-self: center;
  text-transform: uppercase;
`;

export const BookingTable: FC = () => {
  const { t } = useTranslation();

  const [from, setFrom] = useState<Date | null>();
  const [to, setTo] = useState<Date | null>();

  return (
    <Wrapper>
      <Tabs>
        <StyledTab active>{t('Cabins')}</StyledTab>
        <StyledTab>{t('Activities')}</StyledTab>
      </Tabs>
      <Form>
        <InputLabel weight="500">{t('Dates')}</InputLabel>
        <StyledPicker
          dateFormat="dd/MM/yyyy"
          selected={from}
          onChange={day => setFrom(day)}
          placeholderText={t('From')}
        />
        <StyledPicker
          dateFormat="dd/MM/yyyy"
          selected={to}
          onChange={day => setTo(day)}
          placeholderText={t('To')}
        />
        <InputLabel weight="500">{t('Price')}</InputLabel>
        <PriceInputWrapper>
          <NumberInput type="number" name="capacity" placeholder={t('From')} />
          <NumberInput type="number" name="capacity" placeholder={t('To')} />
        </PriceInputWrapper>
        <InputLabel weight="500">{t('Capacity')}</InputLabel>
        <NumberInputWrapper>
          <IncreaseButton>-</IncreaseButton>
          <NumberInput type="number" name="capacity" />
          <IncreaseButton>+</IncreaseButton>
        </NumberInputWrapper>
        <StyledButton>{t('Search')}</StyledButton>
      </Form>
    </Wrapper>
  );
};
