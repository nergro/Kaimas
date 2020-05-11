import { FilterState } from 'types/filter';

import { PriceFilterState } from './activitiesFilter';

export const getInitialListValues = (locationState: FilterState | undefined): FilterState => {
  let capacity = 0;
  let benefits = undefined;
  let price: PriceFilterState = { start: undefined, end: undefined };
  let searchValue = undefined;
  let category = undefined;

  if (locationState) {
    capacity = locationState.capacity;
    benefits = locationState.benefits;
    price = locationState.price;
    searchValue = locationState.searchValue;
    category = locationState.category;
  }
  return { capacity, benefits, price, searchValue, category };
};
