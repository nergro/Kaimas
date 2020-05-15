import { getDatesById } from 'apiServices/availableDates/availableDates';
import React from 'react';
import { newStoreError } from 'store/storeError';
import { Dispatch, Loading, Resource } from 'store/types';
import { AvailableDate } from 'types/availableDate';

import { Action, DatesDispatchContext, DatesStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(DatesStateContext);
  if (state === undefined) {
    throw new Error('Dates store is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(DatesDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Dates store is not initialized');
  }
  return dispatch;
};

export const useDates = (serviceId: string): Resource<AvailableDate[]> => {
  const state = useState();
  const dispatch = useDispatch();
  const dates = state[serviceId];
  if (!dates) {
    dispatch({ type: 'Dates/SingleLoadInitiated', payload: { serviceId } });
    getDatesById(serviceId)
      .then(data => dispatch({ type: 'Dates/SingleLoaded', payload: { serviceId, data } }))
      .catch(err => {
        dispatch({
          type: 'Dates/SingleLoadFailed',
          payload: { serviceId, error: newStoreError(err.message, err.code) },
        });
      });
  }

  if (dates === undefined) {
    return Loading;
  }

  return dates;
};
