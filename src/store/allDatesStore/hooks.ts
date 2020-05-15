import { getDates } from 'apiServices/availableDates/availableDates';
import React, { useMemo } from 'react';
import { newStoreError } from 'store/storeError';
import { assetIsNotStoreError } from 'store/storeError';
import { Dispatch, isLoading, Loading, Resource } from 'store/types';

import { Action, AllDates, AllDatesDispatchContext, AllDatesStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(AllDatesStateContext);
  if (state === undefined) {
    throw new Error('All dates state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(AllDatesDispatchContext);
  if (dispatch === undefined) {
    throw new Error('All dates state is not initialized');
  }
  return dispatch;
};

export const useDatesResource = (): Resource<AllDates> => {
  const state = useState();
  const dispatch = useDispatch();
  if (!state) {
    dispatch({ type: 'AllDates/LoadInitiated' });
    getDates()
      .then(data => dispatch({ type: 'AllDates/Loaded', payload: data }))
      .catch(err => {
        window.location.reload();
        dispatch({ type: 'AllDates/LoadFailed', payload: newStoreError(err.message, err.code) });
      });

    return Loading;
  }

  return state;
};

export const useDatesList = (): AllDates => {
  const dates = useDatesResource();
  assetIsNotStoreError(dates);

  return useMemo(() => (isLoading(dates) ? { cabinDates: [], activityDates: [] } : dates), [dates]);
};
