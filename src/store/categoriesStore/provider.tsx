import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { CategoryType } from 'types/category';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Categories/LoadInitiated'>
  | ActionWithPayload<'Categories/Loaded', CategoryType[]>
  | ActionWithPayload<'Categories/LoadFailed', StoreError>;

export type Categories = CategoryType[];

export type State = Resource<Categories> | null;

const initialState: State = null;

export const {
  dispatchContext: CategoriesDispatchContext,
  stateContext: CategoriesStateContext,
  provider: CategoriesStoreProvider,
} = storeFactory(reducer, initialState);
