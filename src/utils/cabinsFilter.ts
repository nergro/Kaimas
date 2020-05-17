import moment from 'moment';
import { getLocale } from 'services/localStorage';
import { AvailableDate } from 'types/availableDate';
import { Cabin, CapacityFilterType, PriceFilterType } from 'types/cabin';
import { SearchSelectOption } from 'types/searchSelectOption';

export type PriceFilterState = { start: number | undefined; end: number | undefined };

const getFilteredCabinsByPrice = (cabins: Cabin[], priceFilter: PriceFilterState): Cabin[] => {
  let start = 0;
  let end = 0;
  if (priceFilter.start !== undefined) start = priceFilter.start;
  if (priceFilter.end !== undefined) end = priceFilter.end;

  if (start > 0 && end === 0) {
    return cabins.filter(cabin => cabin.price >= start);
  }
  if (end > 0 && start === 0) {
    return cabins.filter(cabin => cabin.price <= end);
  }
  return cabins.filter(cabin => cabin.price >= start && cabin.price <= end);
};

const getFilteredCabinsByBenefits = (cabins: Cabin[], benefits: SearchSelectOption[]): Cabin[] => {
  const filteredCabins: Cabin[] = [];
  const cabinsBenefitsIds = cabins.map(cabin => cabin.benefits.map(benefit => benefit.id));
  const selectedBenefitsIds = benefits.map(benefit => benefit.value);

  cabinsBenefitsIds.forEach((cabinIds, i) => {
    let passed = true;
    selectedBenefitsIds.forEach(id => {
      if (!cabinIds.includes(id)) {
        passed = false;
      }
    });
    if (passed) {
      filteredCabins.push(cabins[i]);
    }
  });

  return filteredCabins;
};

export const getFilteredBySearch = (items: Cabin[], value: string): Cabin[] => {
  const locale = getLocale()?.value;

  return items.filter(item => {
    const name = locale === 'lt' ? item.nameLT : item.nameEN;
    return name.toLowerCase().includes(value.toLowerCase());
  });
};

export const getFilteredByDates = (
  items: Cabin[],
  from: Date | null,
  to: Date | null,
  availableDates: AvailableDate[]
): Cabin[] => {
  const filteredItems: Cabin[] = [];
  items.forEach(item => {
    const itemDates = availableDates.filter(x => x.serviceId.id === item.id);
    let hasCorrectDates = false;
    itemDates.forEach(date => {
      if (from && to) {
        if (moment(date.date).isSameOrAfter(from) && moment(date.date).isSameOrBefore(to)) {
          hasCorrectDates = true;
        }
      } else if (from) {
        if (moment(date.date).isSameOrAfter(from)) {
          hasCorrectDates = true;
        }
      } else if (to) {
        if (moment(date.date).isSameOrBefore(to)) {
          hasCorrectDates = true;
        }
      }
    });
    if (hasCorrectDates) {
      filteredItems.push(item);
    }
  });

  return filteredItems;
};

export const getFilteredCabins = (
  cabins: Cabin[],
  capacityFilter: number,
  priceFilter: PriceFilterState,
  selectedBenefits: SearchSelectOption[] | undefined,
  searchValue: string | undefined,
  availableDates: AvailableDate[],
  from: Date | null,
  to: Date | null
): Cabin[] => {
  let filtered: Cabin[] = [...cabins];
  if (capacityFilter > 0) {
    filtered = filtered.filter(cabin => cabin.capacity >= capacityFilter);
  }
  let start = 0;
  let end = 0;
  if (priceFilter.start !== undefined) start = priceFilter.start;
  if (priceFilter.end !== undefined) end = priceFilter.end;

  if (start > 0 || end > 0) {
    filtered = getFilteredCabinsByPrice(filtered, priceFilter);
  }

  if (selectedBenefits) {
    filtered = getFilteredCabinsByBenefits(filtered, selectedBenefits);
  }
  if (searchValue) {
    filtered = getFilteredBySearch(filtered, searchValue);
  }
  if (from || to) {
    filtered = getFilteredByDates(filtered, from, to, availableDates);
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
