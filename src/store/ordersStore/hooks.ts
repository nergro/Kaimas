import { getOrders } from 'apiServices/orders/orders';
import React, { useMemo } from 'react';
import { getAuthStatus } from 'services/localStorage';
import { newStoreError } from 'store/storeError';
import { assetIsNotStoreError } from 'store/storeError';
import { Dispatch, isLoading, Loading, Resource } from 'store/types';

import { Action, Orders, OrdersDispatchContext, OrdersStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(OrdersStateContext);
  if (state === undefined) {
    throw new Error('orders state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(OrdersDispatchContext);
  if (dispatch === undefined) {
    throw new Error('orders state is not initialized');
  }
  return dispatch;
};

export const useOrdersResource = (): Resource<Orders> => {
  const state = useState();
  const dispatch = useDispatch();
  const isAuth = getAuthStatus();
  if (!isAuth) return [];
  if (!state) {
    dispatch({ type: 'Orders/LoadInitiated' });
    getOrders()
      .then(data => dispatch({ type: 'Orders/Loaded', payload: data }))
      .catch(err =>
        dispatch({ type: 'Orders/LoadFailed', payload: newStoreError(err.message, err.code) })
      );

    return Loading;
  }

  return state;
};

export const useOrdersList = (): Orders => {
  const orders = useOrdersResource();
  assetIsNotStoreError(orders);

  return useMemo(() => (isLoading(orders) ? [] : orders), [orders]);
};
