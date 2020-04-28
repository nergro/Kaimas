import { Activity } from 'types/activity';
import { Cabin } from 'types/cabin';
import { SearchSelectOption } from 'types/searchSelectOption';

export type PriceFilterState = { start: number; end: number };

export const getFilteredCabinsByPrice = (
  cabins: Cabin[] | Activity[],
  priceFilter: PriceFilterState
): Cabin[] | Activity[] => {
  if (priceFilter.start > 0 && priceFilter.end === 0) {
    return cabins.filter(cabin => cabin.price >= priceFilter.start);
  }
  if (priceFilter.end > 0 && priceFilter.start === 0) {
    return cabins.filter(cabin => cabin.price <= priceFilter.end);
  }
  return cabins.filter(cabin => cabin.price >= priceFilter.start && cabin.price <= priceFilter.end);
};

export const getFilteredCabinsByBenefits = (
  cabins: Cabin[],
  benefits: SearchSelectOption[]
): Cabin[] | Activity[] => {
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

export const getFilteredList = (
  items: Cabin[] | Activity[],
  capacityFilter: number,
  priceFilter: PriceFilterState,
  selectedBenefits: SearchSelectOption[] | undefined
): Cabin[] | Activity[] => {
  let filtered = [...items];
  if (capacityFilter > 0) {
    filtered = filtered.filter(cabin => cabin.capacity >= capacityFilter);
  }
  if (priceFilter.start > 0 || priceFilter.end > 0) {
    filtered = getFilteredCabinsByPrice(filtered, priceFilter);
  }
  if (selectedBenefits) {
    filtered = getFilteredCabinsByBenefits(filtered, selectedBenefits);
  }
  return filtered;
};
