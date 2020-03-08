import { H2 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { CabinList } from 'Molecules/CabinList';
import { CabinListFilter } from 'Molecules/CabinListFilter';
import React, { FC, useMemo, useState } from 'react';
import styled from 'styled-components/macro';
import { Cabin, CapacityFilterType, PriceFilterType } from 'types/Cabin';

import { mockedCabins } from './mockedCabins';

const Wrapper = styled.div`
  width: 80%;
  margin: 50px auto;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    width: 85%;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
`;

const ListWrapper = styled.div`
  flex-grow: 1;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 2;
  }
`;

const FilterWrapper = styled.div`
  margin-left: 15px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 1;
    margin: 0;
    width: 40%;
    margin: 0 auto;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 75%;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 90%;
  }
`;

const StyledH2 = styled(H2)`
  text-align: left;
`;

const FilterTitleH2 = styled(H2)`
  text-align: left;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    text-align: center;
  }
`;

type PriceFilterState = { start: number; end: number };

const getFilteredCabinsByPrice = (cabins: Cabin[], priceFilter: PriceFilterState): Cabin[] => {
  if (priceFilter.start > 0 && priceFilter.end === 0) {
    return cabins.filter(cabin => cabin.price >= priceFilter.start);
  }
  if (priceFilter.end > 0 && priceFilter.start === 0) {
    return cabins.filter(cabin => cabin.price <= priceFilter.end);
  }
  return cabins.filter(cabin => cabin.price >= priceFilter.start && cabin.price <= priceFilter.end);
};

export const Cabins: FC = () => {
  const [cabins, setCabins] = useState<Cabin[]>(mockedCabins);
  const [capacityFilter, setCapacityFilter] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<PriceFilterState>({ start: 0, end: 0 });

  const filteredCabins: Cabin[] = useMemo(() => {
    let filteredCabins = [...cabins];
    if (capacityFilter > 0) {
      filteredCabins = filteredCabins.filter(cabin => cabin.capacity === capacityFilter);
    }
    if (priceFilter.start > 0 || priceFilter.end > 0) {
      filteredCabins = getFilteredCabinsByPrice(filteredCabins, priceFilter);
    }
    return filteredCabins;
  }, [cabins, capacityFilter, priceFilter]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filteredCabins = mockedCabins.filter(cabin =>
      cabin.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setCabins(filteredCabins);
  };

  const onCapacityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCapacityFilter(parseInt(e.target.value));
  };

  const onCapacityButtonClick = (action: CapacityFilterType): void => {
    if (action === 'increase') {
      setCapacityFilter(capacityFilter + 1);
    } else {
      setCapacityFilter(capacityFilter - 1);
    }
  };

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>, input: PriceFilterType): void => {
    if (input === 'start') {
      setPriceFilter({ ...priceFilter, start: parseInt(e.target.value) });
    } else {
      setPriceFilter({ ...priceFilter, end: parseInt(e.target.value) });
    }
  };

  return (
    <MainLayout title="Sodybos">
      <Wrapper>
        <ListWrapper>
          <StyledH2>Rasta sodybų: {filteredCabins.length}</StyledH2>
          <CabinList cabins={filteredCabins} />
        </ListWrapper>
        <FilterWrapper>
          <FilterTitleH2>Filtravimas</FilterTitleH2>
          <CabinListFilter
            onSearchChange={onSearchChange}
            capacityValue={capacityFilter}
            onCapacityChange={onCapacityChange}
            onCapacityButtonClick={onCapacityButtonClick}
            onPriceChange={onPriceChange}
          />
        </FilterWrapper>
      </Wrapper>
    </MainLayout>
  );
};
