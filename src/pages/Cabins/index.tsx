import { ListLayout } from 'layouts/ListLayout';
import { CabinListFilter } from 'Molecules/CabinListFilter';
import { ServiceList } from 'Molecules/ServiceList';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import { useCabinsList } from 'store/cabinsStore/hooks';
import { Cabin, CapacityFilterType, PriceFilterType } from 'types/cabin';
import { SearchSelectOption } from 'types/searchSelectOption';
import { getFilteredList, PriceFilterState } from 'utils/listFilter';

export const Cabins: FC = () => {
  const { t } = useTranslation();
  const fetchedCabins = useCabinsList();
  const [cabins, setCabins] = useState<Cabin[]>([]);
  const [capacityFilter, setCapacityFilter] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<PriceFilterState>({ start: 0, end: 0 });
  const [selectedBenefits, setSelectedBenefits] = useState<SearchSelectOption[]>();

  useEffect(() => {
    if (fetchedCabins) {
      setCabins(fetchedCabins);
    }
  }, [fetchedCabins]);

  const locale = getLocale()?.value;

  const filteredCabins: Cabin[] = useMemo(() => {
    return getFilteredList(cabins, capacityFilter, priceFilter, selectedBenefits);
  }, [cabins, capacityFilter, priceFilter, selectedBenefits]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filteredCabins = fetchedCabins.filter(cabin => {
      const name = locale === 'lt' ? cabin.nameLT : cabin.nameEN;

      return name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setCabins(filteredCabins);
  };

  const onCapacityChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCapacityFilter(parseInt(e.target.value));
  };

  const onCapacityButtonClick = (action: CapacityFilterType): void => {
    if (action === 'increase') {
      setCapacityFilter(capacityFilter + 1);
    } else {
      if (capacityFilter > 0) {
        setCapacityFilter(capacityFilter - 1);
      }
    }
  };

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>, input: PriceFilterType): void => {
    if (input === 'start') {
      setPriceFilter({ ...priceFilter, start: e.target.value ? parseInt(e.target.value) : 0 });
    } else {
      setPriceFilter({ ...priceFilter, end: e.target.value ? parseInt(e.target.value) : 0 });
    }
  };
  return (
    <ListLayout
      title={t('Cabins')}
      foundTitle={`${t('Cabins found')}: ${filteredCabins.length}`}
      list={<ServiceList services={filteredCabins} section="cabins" />}
      filter={
        <CabinListFilter
          onSearchChange={onSearchChange}
          capacityValue={capacityFilter}
          onCapacityChange={onCapacityChange}
          onCapacityButtonClick={onCapacityButtonClick}
          onPriceChange={onPriceChange}
          onBenefitsChange={setSelectedBenefits}
        />
      }
    />
  );
};
