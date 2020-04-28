import { PriceFilterState } from 'utils/listFilter';

import { SearchSelectOption } from './searchSelectOption';

export interface FilterState {
  searchValue: string | undefined;
  capacity: number;
  price: PriceFilterState;
  benefits: SearchSelectOption[] | undefined;
}
