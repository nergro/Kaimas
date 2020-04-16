import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Reviews/SingleLoadInitiated': {
      return { ...state, [action.payload.id]: 'Loading' };
    }
    case 'Reviews/SingleLoaded': {
      return { ...state, [action.payload.id]: action.payload.data };
    }
    case 'Reviews/SingleLoadFailed': {
      return { ...state, [action.payload.id]: action.payload.error };
    }
    default: {
      const _ignore: never = action; // check if all cases are handled
      return state;
    }
  }
};
