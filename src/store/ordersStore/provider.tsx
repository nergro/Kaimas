import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { Order } from 'types/order';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Orders/LoadInitiated'>
  | ActionWithPayload<'Orders/Loaded', Order[]>
  | ActionWithPayload<'Orders/LoadFailed', StoreError>;

export type Orders = Order[];

export type State = Resource<Orders> | null;

const initialState: State = null;

export const {
  dispatchContext: OrdersDispatchContext,
  stateContext: OrdersStateContext,
  provider: OrdersStoreProvider,
} = storeFactory(reducer, initialState);
