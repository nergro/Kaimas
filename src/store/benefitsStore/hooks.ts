import { getBenefits } from 'apiServices/benefits/benefits';
import React, { useMemo } from 'react';
import { newStoreError } from 'store/storeError';
import { assetIsNotStoreError } from 'store/storeError';
import { Dispatch, isLoading, Loading, Resource } from 'store/types';

import { Action, Benefits, BenefitsDispatchContext, BenefitsStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(BenefitsStateContext);
  if (state === undefined) {
    throw new Error('benefits state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(BenefitsDispatchContext);
  if (dispatch === undefined) {
    throw new Error('benefits state is not initialized');
  }
  return dispatch;
};

export const useBenefitsResource = (): Resource<Benefits> => {
  const state = useState();
  const dispatch = useDispatch();
  if (!state) {
    dispatch({ type: 'Benefits/LoadInitiated' });
    getBenefits()
      .then(data => dispatch({ type: 'Benefits/Loaded', payload: data }))
      .catch(err =>
        dispatch({ type: 'Benefits/LoadFailed', payload: newStoreError(err.message, err.code) })
      );

    return Loading;
  }

  return state;
};

export const useBenefitsList = (): Benefits => {
  const benefits = useBenefitsResource();
  assetIsNotStoreError(benefits);

  return useMemo(() => (isLoading(benefits) ? [] : benefits), [benefits]);
};
