import { Tab } from 'Atoms/buttons/Tab';
import { ButtonLink } from 'Atoms/links/ButtonLink';
import { H3 } from 'Atoms/text';
import { ListFilter } from 'Molecules/ListFilter';
import moment from 'moment';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDatesList } from 'store/allDatesStore/hooks';
import styled from 'styled-components/macro';
import { CapacityFilterType, PriceFilterType } from 'types/cabin';
import { FilterState } from 'types/filter';
import { SearchSelectOption } from 'types/searchSelectOption';
import { onCapacityButtonClick, onPriceChange, PriceFilterState } from 'utils/activitiesFilter';

const Wrapper = styled.div`
  @media (max-height: 900px) and (min-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 100px;
  }
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

const Tabs = styled.div`
  display: flex;
`;

const StyledTab = styled(Tab)``;

const FormWrapper = styled.div`
  background: ${props => props.theme.colors.background.primary};
  padding: 10px 30px 40px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledLink = styled(ButtonLink)`
  padding: 10px 10%;
  margin-top: 20px;
  align-self: center;
  text-transform: uppercase;
`;

export const BookingTable: FC = () => {
  const dates = useDatesList();
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<'cabins' | 'activities'>('cabins');
  const [searchValue, setSearchValue] = useState<string>();
  const [capacityFilter, setCapacityFilter] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<PriceFilterState>({
    start: undefined,
    end: undefined,
  });
  const [selectedBenefits, setSelectedBenefits] = useState<SearchSelectOption[]>();
  const [selectedCategory, setSelectedCategory] = useState<SearchSelectOption>();
  const [from, setFrom] = useState<Date | null>(null);
  const [to, setTo] = useState<Date | null>(null);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onCapacityClick = (action: CapacityFilterType): void => {
    setCapacityFilter(onCapacityButtonClick(action, capacityFilter));
  };

  const onPrice = (e: React.ChangeEvent<HTMLInputElement>, input: PriceFilterType): void => {
    setPriceFilter(onPriceChange(e.target.value, input, priceFilter));
  };

  const filterData: FilterState = {
    searchValue,
    capacity: capacityFilter,
    price: priceFilter,
    benefits: selectedBenefits,
    category: selectedCategory,
  };

  const allDates = activeSection === 'cabins' ? dates.cabinDates : dates.activityDates;

  const availableDates = allDates
    .filter(x => moment(x.date).isAfter(new Date()))
    .map(x => moment(x.date).toDate());

  return (
    <Wrapper>
      <Tabs>
        <StyledTab active={activeSection === 'cabins'} onClick={() => setActiveSection('cabins')}>
          {t('Cabins')}
        </StyledTab>
        <StyledTab
          active={activeSection === 'activities'}
          onClick={() => setActiveSection('activities')}
        >
          {t('Activities')}
        </StyledTab>
      </Tabs>
      <FormWrapper>
        <H3>{activeSection === 'cabins' ? t('Search cabins') : t('Search activities')}</H3>
        <ListFilter
          onSearchChange={onSearch}
          capacityValue={capacityFilter}
          onCapacityChange={e => setCapacityFilter(parseInt(e.target.value))}
          onCapacityButtonClick={onCapacityClick}
          onPriceChange={onPrice}
          onBenefitsChange={setSelectedBenefits}
          searchValue={searchValue}
          priceValues={priceFilter}
          benefitValues={selectedBenefits}
          hasCategory={activeSection === 'activities'}
          categoryValue={selectedCategory}
          onCategoryChange={setSelectedCategory}
          availableDates={availableDates}
          from={from}
          to={to}
          onFromChange={day => setFrom(day)}
          onToChange={day => setTo(day)}
        />
        <StyledLink toObject={{ pathname: `/${activeSection}`, state: filterData }}>
          {t('Search')}
        </StyledLink>
      </FormWrapper>
    </Wrapper>
  );
};
