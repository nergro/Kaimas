import { IncreaseButton } from 'Atoms/buttons/IncreaseButton';
import { DatePicker } from 'Atoms/DatePicker';
import { Input } from 'Atoms/Input';
import { H3 } from 'Atoms/text';
import { MultiSelect } from 'Molecules/select/MultiSelect';
import { SingleSelect } from 'Molecules/select/SingleSelect';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import { useBenefitsList } from 'store/benefitsStore/hooks';
import { useCategoriesList } from 'store/categoriesStore/hooks';
import styled from 'styled-components/macro';
import { CapacityFilterType, PriceFilterType } from 'types/cabin';
import { SearchSelectOption } from 'types/searchSelectOption';
import { PriceFilterState } from 'utils/activitiesFilter';

const Wrapper = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.colors.background.primary};
  padding: 30px 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled(H3)`
  text-align: left;
  margin: 10px 0 0 0;
  &:first-child {
    margin: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    text-align: center;
  }
`;

const StyledInput = styled(Input)`
  margin-top: 10px;
`;

const NumberInputWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NumberInput = styled(Input)`
  margin: 0 20px;
  text-align: center;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
  font: ${props => props.theme.fonts.bigTextBold};
  color: ${props => props.theme.colors.text.available};
`;

const PriceInputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  ${NumberInput} {
    margin: 0 10px 0 0;
    font: ${props => props.theme.fonts.mediumText};
  }
`;

const DatePickers = styled.div`
  display: flex;
  .react-datepicker-wrapper {
    &:first-child {
      margin-right: 10px;
    }
  }
`;

interface Props {
  className?: string;
  onSearchChange(e: React.ChangeEvent<HTMLInputElement>): void;
  capacityValue: number;
  searchValue: string | undefined;
  onCapacityChange(e: React.ChangeEvent<HTMLInputElement>): void;
  onCapacityButtonClick(action: CapacityFilterType): void;
  onPriceChange(e: React.ChangeEvent<HTMLInputElement>, input: PriceFilterType): void;
  onBenefitsChange?: (values?: SearchSelectOption[]) => void;
  priceValues: PriceFilterState;
  benefitValues: SearchSelectOption[] | undefined;
  hasCategory?: boolean;
  categoryValue?: SearchSelectOption | undefined;
  onCategoryChange?: (value?: SearchSelectOption) => void;
  availableDates: Date[];
  from: Date | null;
  to: Date | null;
  onFromChange: (day: Date) => void;
  onToChange: (day: Date) => void;
  showCapacity?: boolean;
}

export const ListFilter: FC<Props> = ({
  onSearchChange,
  capacityValue,
  searchValue,
  onCapacityChange,
  onCapacityButtonClick,
  onPriceChange,
  onBenefitsChange,
  priceValues,
  benefitValues,
  hasCategory,
  categoryValue,
  onCategoryChange,
  availableDates,
  from,
  to,
  onFromChange,
  onToChange,
  showCapacity = true,
}) => {
  const { t } = useTranslation();
  const benefits = useBenefitsList();
  const categories = useCategoriesList();
  const locale = getLocale()?.value;
  const isLT = locale === 'lt';

  const benefitOptions = benefits.map(x => ({
    value: x.id,
    label: isLT ? x.descriptionLT : x.descriptionEN,
  }));

  const categoriesOptions = categories.map(x => ({
    value: x.id,
    label: isLT ? x.nameLT : x.nameEN,
  }));

  return (
    <Wrapper>
      <InputLabel weight="500">{t('Dates')}</InputLabel>
      <DatePickers>
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={from}
          onChange={onFromChange}
          placeholderText={t('From')}
          includeDates={availableDates}
        />
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={to}
          onChange={onToChange}
          placeholderText={t('To')}
          includeDates={availableDates}
        />
      </DatePickers>
      <InputLabel weight="500">{t('Search')}</InputLabel>
      <StyledInput
        type="text"
        name="SearchTitle"
        placeholder={t('Enter title')}
        onChange={onSearchChange}
        value={searchValue}
      />
      {showCapacity && <InputLabel weight="500">{t('Capacity')}</InputLabel>}
      {showCapacity && (
        <NumberInputWrapper>
          <IncreaseButton onClick={() => onCapacityButtonClick('decrease')}>-</IncreaseButton>
          <NumberInput
            type="number"
            name="capacity"
            value={capacityValue}
            onChange={onCapacityChange}
          />
          <IncreaseButton onClick={() => onCapacityButtonClick('increase')}>+</IncreaseButton>
        </NumberInputWrapper>
      )}
      <InputLabel weight="500">{t('Price')}</InputLabel>
      <PriceInputWrapper>
        <NumberInput
          type="number"
          name="priceFrom"
          placeholder={t('From')}
          onChange={e => onPriceChange(e, 'start')}
          value={priceValues.start}
        />
        <NumberInput
          type="number"
          name="priceTo"
          placeholder={t('To')}
          onChange={e => onPriceChange(e, 'end')}
          value={priceValues.end}
        />
      </PriceInputWrapper>
      <InputLabel weight="500">{t('Benefits')}</InputLabel>
      <MultiSelect
        options={benefitOptions}
        placeholder={t('Choose one or more')}
        onChange={onBenefitsChange}
        value={benefitValues}
      />
      {hasCategory && (
        <>
          <InputLabel weight="500">{t('Categories')}</InputLabel>
          <SingleSelect
            options={categoriesOptions}
            placeholder={t('Choose one')}
            onChange={onCategoryChange}
            value={categoryValue}
          />
        </>
      )}
    </Wrapper>
  );
};
