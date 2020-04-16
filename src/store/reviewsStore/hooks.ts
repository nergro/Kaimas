import { getReviews } from 'apiServices/reviews/reviews';
import React from 'react';
import { newStoreError } from 'store/storeError';
import { Dispatch, Loading, Resource } from 'store/types';
import { Review } from 'types/review';

import { Action, ReviewsDispatchContext, ReviewsStateContext, State } from './provider';

export const useState = (): State => {
  const state = React.useContext(ReviewsStateContext);
  if (state === undefined) {
    throw new Error('Reviews store is not initialized');
  }
  return state;
};

export const useDispatch = (): Dispatch<Action> => {
  const dispatch = React.useContext(ReviewsDispatchContext);
  if (dispatch === undefined) {
    throw new Error('Reviews store is not initialized');
  }
  return dispatch;
};

export const useReviews = (id: string): Resource<Review[]> => {
  const state = useState();
  const dispatch = useDispatch();
  const reviews = state[id];
  if (!reviews) {
    dispatch({ type: 'Reviews/SingleLoadInitiated', payload: { id } });
    getReviews(id)
      .then(data => dispatch({ type: 'Reviews/SingleLoaded', payload: { id, data } }))
      .catch(err => {
        dispatch({
          type: 'Reviews/SingleLoadFailed',
          payload: { id, error: newStoreError(err.message, err.code) },
        });
      });
  }

  if (reviews === undefined) {
    return Loading;
  }

  return reviews;
};
