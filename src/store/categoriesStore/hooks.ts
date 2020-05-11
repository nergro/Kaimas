import { getCategories } from 'apiServices/categories/categories';
import React, { useMemo } from 'react';
import { newStoreError } from 'store/storeError';
import { assetIsNotStoreError } from 'store/storeError';
import { Dispatch, isLoading, Loading, Resource } from 'store/types';

import {
  Action,
  Categories,
  CategoriesDispatchContext,
  CategoriesStateContext,
  State,
} from './provider';

export const useState = (): State => {
  const state = React.useContext(CategoriesStateContext);
  if (state === undefined) {
    throw new Error('categories state is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(CategoriesDispatchContext);
  if (dispatch === undefined) {
    throw new Error('categories state is not initialized');
  }
  return dispatch;
};

export const useCategoriesResource = (): Resource<Categories> => {
  const state = useState();
  const dispatch = useDispatch();
  if (!state) {
    dispatch({ type: 'Categories/LoadInitiated' });
    getCategories()
      .then(data => dispatch({ type: 'Categories/Loaded', payload: data }))
      .catch(err =>
        dispatch({ type: 'Categories/LoadFailed', payload: newStoreError(err.message, err.code) })
      );

    return Loading;
  }

  return state;
};

export const useCategoriesList = (): Categories => {
  const categories = useCategoriesResource();
  assetIsNotStoreError(categories);

  return useMemo(() => (isLoading(categories) ? [] : categories), [categories]);
};
