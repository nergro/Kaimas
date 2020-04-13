import { getCabins } from 'apiServices/cabins/cabins';
import React from 'react';
import { newStoreError } from 'store/storeError';
import { Dispatch, Loading, Resource } from 'store/types';

import { Action, Cabins, CabinsDispatchContext, CabinsStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(CabinsStateContext);
  if (state === undefined) {
    throw new Error('cabins state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(CabinsDispatchContext);
  if (dispatch === undefined) {
    throw new Error('cabins state is not initialized');
  }
  return dispatch;
};

export const useCabinsResource = (): Resource<Cabins> => {
  const state = useState();
  const dispatch = useDispatch();
  if (!state) {
    dispatch({ type: 'Cabins/LoadInitiated' });
    getCabins()
      .then(data => dispatch({ type: 'Cabins/Loaded', payload: data }))
      .catch(err =>
        dispatch({ type: 'Cabins/LoadFailed', payload: newStoreError(err.message, err.code) })
      );

    return Loading;
  }

  return state;
};
