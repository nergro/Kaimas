import { getActivities } from 'apiServices/activities/activities';
import React from 'react';
import { newStoreError } from 'store/storeError';
import { Dispatch, Loading, Resource } from 'store/types';

import {
  Action,
  Activities,
  ActivitiesDispatchContext,
  ActivitiesStateContext,
  State,
} from './provider';

export const useState = (): State => {
  const state = React.useContext(ActivitiesStateContext);
  if (state === undefined) {
    throw new Error('activities state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(ActivitiesDispatchContext);
  if (dispatch === undefined) {
    throw new Error('activities state is not initialized');
  }
  return dispatch;
};

export const useActivitiesResource = (): Resource<Activities> => {
  const state = useState();
  const dispatch = useDispatch();
  if (!state) {
    dispatch({ type: 'Activities/LoadInitiated' });
    getActivities()
      .then(data => dispatch({ type: 'Activities/Loaded', payload: data }))
      .catch(err =>
        dispatch({ type: 'Activities/LoadFailed', payload: newStoreError(err.message, err.code) })
      );

    return Loading;
  }

  return state;
};
