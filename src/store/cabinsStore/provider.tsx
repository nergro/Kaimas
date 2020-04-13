import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Cabin } from 'types/cabin';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Cabins/LoadInitiated'>
  | ActionWithPayload<'Cabins/Loaded', Cabin[]>
  | ActionWithPayload<'Cabins/LoadFailed', StoreError>;

export type Cabins = Cabin[];

export type State = Resource<Cabins> | null;

const initialState: State = null;

export const {
  dispatchContext: CabinsDispatchContext,
  stateContext: CabinsStateContext,
  provider: CabinsStoreProvider,
} = storeFactory(reducer, initialState);
