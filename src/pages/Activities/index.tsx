import { ListLayout } from 'layouts/ListLayout';
import { CabinListFilter } from 'Molecules/CabinListFilter';
import { ServiceList } from 'Molecules/ServiceList';
import React, { FC, useMemo, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getLocale } from 'services/localStorage';
import { useActivitiesList } from 'store/activitiesStore/hooks';
import { Activity } from 'types/activity';
import { CapacityFilterType, PriceFilterType } from 'types/cabin';

type PriceFilterState = { start: number; end: number };

const getFilteredCabinsByPrice = (
  cabins: Activity[],
  priceFilter: PriceFilterState
): Activity[] => {
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
  const fetchedActivities = useActivitiesList();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [capacityFilter, setCapacityFilter] = useState<number>(0);
  const [priceFilter, setPriceFilter] = useState<PriceFilterState>({ start: 0, end: 0 });

  useEffect(() => {
    if (fetchedActivities) {
      setActivities(fetchedActivities);
    }
  }, [fetchedActivities]);

  const locale = getLocale()?.value;

  const filteredActivities: Activity[] = useMemo(() => {
    let filteredCabins = [...fetchedActivities];
    if (capacityFilter > 0) {
      filteredCabins = filteredCabins.filter(cabin => cabin.capacity === capacityFilter);
    }
    if (priceFilter.start > 0 || priceFilter.end > 0) {
      filteredCabins = getFilteredCabinsByPrice(filteredCabins, priceFilter);
    }
    return filteredCabins;
  }, [fetchedActivities, capacityFilter, priceFilter]);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const filteredCabins = activities.filter(cabin => {
      const name = locale === 'lt' ? cabin.nameLT : cabin.nameEN;

      return name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setActivities(filteredCabins);
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
      foundTitle={`${t('Activities found')}: ${filteredActivities.length}`}
      list={<ServiceList services={filteredActivities} section="activities" />}
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
