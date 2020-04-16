import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { ActionWithPayload, Resource } from 'store/types';
import { Review } from 'types/review';

import { reducer } from './reducer';

export type Action =
  | ActionWithPayload<'Reviews/SingleLoadInitiated', { id: string }>
  | ActionWithPayload<'Reviews/SingleLoaded', { id: string; data: Review[] }>
  | ActionWithPayload<'Reviews/SingleLoadFailed', { id: string; error: StoreError }>;

export type State = {
  [id: string]: Resource<Review[]> | undefined;
};

const initialState: State = {};

export const {
  dispatchContext: ReviewsDispatchContext,
  stateContext: ReviewsStateContext,
  provider: ReviewsStoreProvider,
} = storeFactory(reducer, initialState);
