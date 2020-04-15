import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Activity } from 'types/activity';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Activities/LoadInitiated'>
  | ActionWithPayload<'Activities/Loaded', Activity[]>
  | ActionWithPayload<'Activities/LoadFailed', StoreError>;

export type Activities = Activity[];

export type State = Resource<Activities> | null;

const initialState: State = null;

export const {
  dispatchContext: ActivitiesDispatchContext,
  stateContext: ActivitiesStateContext,
  provider: ActivitiesStoreProvider,
} = storeFactory(reducer, initialState);
