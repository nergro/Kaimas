import { ListLayout } from 'layouts/ListLayout';
import { ListFilter } from 'Molecules/ListFilter';
import { ServiceList } from 'Molecules/ServiceList';
import moment from 'moment';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useActivitiesList } from 'store/activitiesStore/hooks';
import { useDatesList } from 'store/allDatesStore/hooks';
import { Activity } from 'types/activity';
import { CapacityFilterType, PriceFilterType } from 'types/cabin';
import { SearchSelectOption } from 'types/searchSelectOption';
import {
  getFilteredActivities,
  onCapacityButtonClick,
  onPriceChange,
  PriceFilterState,
} from 'utils/activitiesFilter';
import { getInitialListValues } from 'utils/getInitialListValues';

export const Activities: FC = () => {
  const dates = useDatesList();
  const location = useLocation();
  const {
    benefits,
    capacity,
    price,
    searchValue: initialSearchValue,
    category,
    from: initialFrom,
    to: initialTo,
  } = getInitialListValues(location.state);

  const { t } = useTranslation();
  const fetchedActivities = useActivitiesList();
  const [activities, setActivities] = useState<Activity[]>([]);
  const [capacityFilter, setCapacityFilter] = useState<number>(capacity);
  const [priceFilter, setPriceFilter] = useState<PriceFilterState>(price);
  const [selectedBenefits, setSelectedBenefits] = useState<SearchSelectOption[] | undefined>(
    benefits
  );
  const [selectedCategory, setSelectedCategory] = useState<SearchSelectOption | undefined>(
    category
  );
  const [searchValue, setSearchValue] = useState<string | undefined>(initialSearchValue);
  const [from, setFrom] = useState<Date | null>(initialFrom);
  const [to, setTo] = useState<Date | null>(initialTo);

  useEffect(() => {
    if (fetchedActivities) {
      setActivities(fetchedActivities);
    }
  }, [fetchedActivities]);

  const filteredActivities = useMemo(() => {
    return getFilteredActivities(
      activities,
      capacityFilter,
      priceFilter,
      selectedBenefits,
      searchValue,
      selectedCategory,
      dates.activityDates,
      from,
      to
    );
  }, [
    activities,
    capacityFilter,
    priceFilter,
    selectedBenefits,
    searchValue,
    selectedCategory,
    dates.activityDates,
    from,
    to,
  ]);

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(e.target.value);
  };

  const onCapacityClick = (action: CapacityFilterType): void => {
    setCapacityFilter(onCapacityButtonClick(action, capacityFilter));
  };

  const onPrice = (e: React.ChangeEvent<HTMLInputElement>, input: PriceFilterType): void => {
    setPriceFilter(onPriceChange(e.target.value, input, priceFilter));
  };

  const availableDates = dates.activityDates
    .filter(x => moment(x.date).isAfter(new Date()))
    .map(x => moment(x.date).toDate());

  return (
    <ListLayout
      title={t('Activities')}
      foundTitle={`${t('Activities found')}: ${filteredActivities.length}`}
      list={<ServiceList services={filteredActivities} section="activities" />}
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
          hasCategory
          categoryValue={selectedCategory}
          onCategoryChange={setSelectedCategory}
          availableDates={availableDates}
          from={from}
          to={to}
          onFromChange={day => setFrom(day)}
          onToChange={day => setTo(day)}
        />
      }
    />
  );
};
