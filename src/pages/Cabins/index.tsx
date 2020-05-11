import { ListLayout } from 'layouts/ListLayout';
import { ListFilter } from 'Molecules/ListFilter';
import { ServiceList } from 'Molecules/ServiceList';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useCabinsList } from 'store/cabinsStore/hooks';
import { Cabin, CapacityFilterType, PriceFilterType } from 'types/cabin';
import { SearchSelectOption } from 'types/searchSelectOption';
import {
  getFilteredCabins,
  onCapacityButtonClick,
  onPriceChange,
  PriceFilterState,
} from 'utils/cabinsFilter';
import { getInitialListValues } from 'utils/getInitialListValues';

export const Cabins: FC = () => {
  const location = useLocation();
  const { benefits, capacity, price, searchValue: initialSearchValue } = getInitialListValues(
    location.state
  );

  const { t } = useTranslation();
  const fetchedCabins = useCabinsList();
  const [cabins, setCabins] = useState<Cabin[]>([]);
  const [capacityFilter, setCapacityFilter] = useState<number>(capacity);
  const [priceFilter, setPriceFilter] = useState<PriceFilterState>(price);
  const [selectedBenefits, setSelectedBenefits] = useState<SearchSelectOption[] | undefined>(
    benefits
  );
  const [searchValue, setSearchValue] = useState<string | undefined>(initialSearchValue);

  useEffect(() => {
    if (fetchedCabins.length > 0) {
      setCabins(fetchedCabins);
    }
  }, [fetchedCabins]);

  const filteredCabins: Cabin[] = useMemo(() => {
    return getFilteredCabins(cabins, capacityFilter, priceFilter, selectedBenefits, searchValue);
  }, [cabins, capacityFilter, priceFilter, selectedBenefits, searchValue]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onCapacityClick = (action: CapacityFilterType): void => {
    setCapacityFilter(onCapacityButtonClick(action, capacityFilter));
  };

  const onPrice = (e: React.ChangeEvent<HTMLInputElement>, input: PriceFilterType): void => {
    setPriceFilter(onPriceChange(e.target.value, input, priceFilter));
  };

  return (
    <ListLayout
      title={t('Cabins')}
      foundTitle={`${t('Cabins found')}: ${filteredCabins.length}`}
      list={<ServiceList services={filteredCabins} section="cabins" />}
      filter={
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
      }
    />
  );
};
