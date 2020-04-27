import { Button } from 'Atoms/buttons/Button';
import { IncreaseButton } from 'Atoms/buttons/IncreaseButton';
import { Tab } from 'Atoms/buttons/Tab';
import {
  InputLabel,
  NumberInput,
  NumberInputWrapper,
  PriceInputWrapper,
} from 'Molecules/CabinListFilter';
import { MultiSelect } from 'Molecules/select/MultiSelect';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { BenefitType } from 'types/benefit';

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

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin-top: 20px;
  align-self: center;
  text-transform: uppercase;
`;

interface Props {
  benefits: BenefitType[];
}

export const BookingTable: FC<Props> = ({ benefits }) => {
  const { t } = useTranslation();
  const locale = getLocale()?.value;
  const isLT = locale === 'lt';

  const benefitOptions = benefits.map(x => ({
    value: x.id,
    label: isLT ? x.descriptionLT : x.descriptionEN,
  }));

  return (
    <Wrapper>
      <Tabs>
        <StyledTab active>{t('Cabins')}</StyledTab>
        <StyledTab>{t('Activities')}</StyledTab>
      </Tabs>
      <Form>
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
        <InputLabel weight="500">{t('Benefits')}</InputLabel>
        <MultiSelect options={benefitOptions} placeholder={t('Choose one or more')} />
        <StyledButton>{t('Search')}</StyledButton>
      </Form>
    </Wrapper>
  );
};
