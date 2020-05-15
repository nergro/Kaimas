import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { AvailableDate } from 'types/availableDate';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'AllDates/LoadInitiated'>
  | ActionWithPayload<'AllDates/Loaded', AvailableDate[]>
  | ActionWithPayload<'AllDates/LoadFailed', StoreError>;

export type AllDates = {
  cabinDates: AvailableDate[];
  activityDates: AvailableDate[];
};

export type State = Resource<{
  cabinDates: AvailableDate[];
  activityDates: AvailableDate[];
}> | null;

const initialState: State = null;

export const {
  dispatchContext: AllDatesDispatchContext,
  stateContext: AllDatesStateContext,
  provider: AllDatesStoreProvider,
} = storeFactory(reducer, initialState);
