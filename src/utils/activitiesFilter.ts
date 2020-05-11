import { getLocale } from 'services/localStorage';
import { Activity } from 'types/activity';
import { CapacityFilterType, PriceFilterType } from 'types/cabin';
import { SearchSelectOption } from 'types/searchSelectOption';

export type PriceFilterState = { start: number | undefined; end: number | undefined };

const getFilteredActivitiesByPrice = (
  activities: Activity[],
  priceFilter: PriceFilterState
): Activity[] => {
  let start = 0;
  let end = 0;
  if (priceFilter.start !== undefined) start = priceFilter.start;
  if (priceFilter.end !== undefined) end = priceFilter.end;

  if (start > 0 && end === 0) {
    return activities.filter(x => x.price >= start);
  }
  if (end > 0 && start === 0) {
    return activities.filter(x => x.price <= end);
  }
  return activities.filter(x => x.price >= start && x.price <= end);
};

const getFilteredActivitiesByBenefits = (
  activities: Activity[],
  benefits: SearchSelectOption[]
): Activity[] => {
  const filteredActivities: Activity[] = [];
  const activitiesBenefitsIds = activities.map(x => x.benefits.map(benefit => benefit.id));
  const selectedBenefitsIds = benefits.map(benefit => benefit.value);

  activitiesBenefitsIds.forEach((cabinIds, i) => {
    let passed = true;
    selectedBenefitsIds.forEach(id => {
      if (!cabinIds.includes(id)) {
        passed = false;
      }
    });
    if (passed) {
      filteredActivities.push(activities[i]);
    }
  });

  return filteredActivities;
};

const getFilteredActivitiesByCategory = (
  activities: Activity[],
  category: SearchSelectOption
): Activity[] => {
  const filteredA: Activity[] = [];

  activities.forEach(x => {
    if (x.category.id === category.value) {
      filteredA.push(x);
    }
  });

  return filteredA;
};

export const getFilteredBySearch = (items: Activity[], value: string): Activity[] => {
  const locale = getLocale()?.value;

  return items.filter(item => {
    const name = locale === 'lt' ? item.nameLT : item.nameEN;
    return name.toLowerCase().includes(value.toLowerCase());
  });
};

export const getFilteredActivities = (
  activities: Activity[],
  capacityFilter: number,
  priceFilter: PriceFilterState,
  selectedBenefits: SearchSelectOption[] | undefined,
  searchValue: string | undefined,
  selectedCategory: SearchSelectOption | undefined
): Activity[] => {
  let filtered: Activity[] = [...activities];
  if (capacityFilter > 0) {
    filtered = filtered.filter(cabin => cabin.capacity >= capacityFilter);
  }
  let start = 0;
  let end = 0;
  if (priceFilter.start !== undefined) start = priceFilter.start;
  if (priceFilter.end !== undefined) end = priceFilter.end;

  if (start > 0 || end > 0) {
    filtered = getFilteredActivitiesByPrice(filtered, priceFilter);
  }

  if (selectedBenefits) {
    filtered = getFilteredActivitiesByBenefits(filtered, selectedBenefits);
  }
  if (selectedCategory) {
    filtered = getFilteredActivitiesByCategory(filtered, selectedCategory);
  }
  if (searchValue) {
    filtered = getFilteredBySearch(filtered, searchValue);
  }
  return filtered;
};

export const onCapacityButtonClick = (action: CapacityFilterType, capacity: number): number => {
  if (action === 'increase') {
    return capacity + 1;
  } else {
    if (capacity > 0) {
      return capacity - 1;
    }
  }
  return capacity;
};

export const onPriceChange = (
  value: string,
  input: PriceFilterType,
  priceFilter: PriceFilterState
): PriceFilterState => {
  if (input === 'start') {
    return { ...priceFilter, start: value ? parseInt(value) : 0 };
  } else {
    return { ...priceFilter, end: value ? parseInt(value) : 0 };
  }
};
