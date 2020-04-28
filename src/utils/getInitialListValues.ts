import { FilterState } from 'types/filter';

import { PriceFilterState } from './listFilter';

export const getInitialListValues = (locationState: FilterState | undefined): FilterState => {
  let capacity = 0;
  let benefits = undefined;
  let price: PriceFilterState = { start: undefined, end: undefined };
  let searchValue = undefined;

  if (locationState) {
    capacity = locationState.capacity;
    benefits = locationState.benefits;
    price = locationState.price;
    searchValue = locationState.searchValue;
  }
  return { capacity, benefits, price, searchValue };
};
