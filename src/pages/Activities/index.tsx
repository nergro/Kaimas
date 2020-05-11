import { ListLayout } from 'layouts/ListLayout';
import { ListFilter } from 'Molecules/ListFilter';
import { ServiceList } from 'Molecules/ServiceList';
import React, { FC, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useActivitiesList } from 'store/activitiesStore/hooks';
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
  const location = useLocation();
  const {
    benefits,
    capacity,
    price,
    searchValue: initialSearchValue,
    category,
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
      selectedCategory
    );
  }, [activities, capacityFilter, priceFilter, selectedBenefits, searchValue, selectedCategory]);

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
        />
      }
    />
  );
};
