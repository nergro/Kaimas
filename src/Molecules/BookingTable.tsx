import { Tab } from 'Atoms/buttons/Tab';
import { ButtonLink } from 'Atoms/links/ButtonLink';
import { H3 } from 'Atoms/text';
import { ListFilter } from 'Molecules/ListFilter';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { CapacityFilterType, PriceFilterType } from 'types/cabin';
import { FilterState } from 'types/filter';
import { SearchSelectOption } from 'types/searchSelectOption';
import { onCapacityButtonClick, onPriceChange, PriceFilterState } from 'utils/listFilter';

const Wrapper = styled.div`
  margin-top: 100px;
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
  const [activeSection, setActiveSection] = useState<'cabins' | 'activities'>('cabins');
  const [searchValue, setSearchValue] = useState<string>();
  const [capacityFilter, setCapacityFilter] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<PriceFilterState>({
    start: undefined,
    end: undefined,
  });
  const [selectedBenefits, setSelectedBenefits] = useState<SearchSelectOption[]>();

  const { t } = useTranslation();

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
  };

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
        />
        <StyledLink toObject={{ pathname: `/${activeSection}`, state: filterData }}>
          {t('Search')}
        </StyledLink>
      </FormWrapper>
    </Wrapper>
  );
};
