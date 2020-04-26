import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { ActionWithPayload, Resource } from 'store/types';
import { AvailableDate } from 'types/availableDate';

import { reducer } from './reducer';

export type Action =
  | ActionWithPayload<'Dates/SingleLoadInitiated', { serviceId: string }>
  | ActionWithPayload<'Dates/SingleLoaded', { serviceId: string; data: AvailableDate[] }>
  | ActionWithPayload<'Dates/SingleLoadFailed', { serviceId: string; error: StoreError }>;

export type State = {
  [serviceId: string]: Resource<AvailableDate[]> | undefined;
};

const initialState: State = {};

export const {
  dispatchContext: DatesDispatchContext,
  stateContext: DatesStateContext,
  provider: DatesStoreProvider,
} = storeFactory(reducer, initialState);
