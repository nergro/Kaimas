import { Loading } from 'store/types';

import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'Cabins/LoadInitiated': {
      return Loading;
    }
    case 'Cabins/Loaded': {
      return action.payload;
    }
    case 'Cabins/LoadFailed': {
      return action.payload;
    }
    default: {
      const _ignore: never = action; // check if all cases are handled
      return state;
    }
  }
};
