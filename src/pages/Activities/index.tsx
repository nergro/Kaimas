import { Loader } from 'Atoms/Loader';
import { ListLayout } from 'layouts/ListLayout';
import { MainLayout } from 'layouts/MainLayout';
import { CabinListFilter } from 'Molecules/CabinListFilter';
import { ServiceList } from 'Molecules/ServiceList';
import React, { FC, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useActivitiesResource } from 'store/activitiesStore/hooks';
import { assetIsNotStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';
import { Cabin, CapacityFilterType, PriceFilterType } from 'types/cabin';

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

export const Activities: FC = () => {
  const { t } = useTranslation();
  const activitiesResource = useActivitiesResource();
  const [cabins, setCabins] = useState<Cabin[]>([]);
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

  assetIsNotStoreError(activitiesResource);
  if (isLoading(activitiesResource)) {
    return (
      <MainLayout title={t('Activities')}>
        <Wrapper>
          <Loader />
        </Wrapper>
      </MainLayout>
    );
  }

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filteredCabins = activitiesResource.filter(cabin =>
      cabin.nameLT.toLowerCase().includes(e.target.value.toLowerCase())
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
    <ListLayout
      title={t('Activities')}
      foundTitle={`${t('Activities found')}: ${activitiesResource.length}`}
      list={<ServiceList services={activitiesResource} section="activities" />}
      filter={
        <CabinListFilter
          onSearchChange={onSearchChange}
          capacityValue={capacityFilter}
          onCapacityChange={onCapacityChange}
          onCapacityButtonClick={onCapacityButtonClick}
          onPriceChange={onPriceChange}
        />
      }
    />
  );
};
