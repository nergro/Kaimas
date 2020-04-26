import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Dates/SingleLoadInitiated': {
      return { ...state, [action.payload.serviceId]: 'Loading' };
    }
    case 'Dates/SingleLoaded': {
      return { ...state, [action.payload.serviceId]: action.payload.data };
    }
    case 'Dates/SingleLoadFailed': {
      return { ...state, [action.payload.serviceId]: action.payload.error };
    }
    default: {
      const _ignore: never = action; // check if all cases are handled
      return state;
    }
  }
};
