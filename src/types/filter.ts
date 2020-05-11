import { PriceFilterState } from 'utils/activitiesFilter';

import { SearchSelectOption } from './searchSelectOption';

export interface FilterState {
  searchValue: string | undefined;
  capacity: number;
  price: PriceFilterState;
  benefits: SearchSelectOption[] | undefined;
  category: SearchSelectOption | undefined;
}
