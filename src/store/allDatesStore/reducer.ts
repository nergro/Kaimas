import { Loading } from 'store/types';

import { Action, State } from './provider';

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'AllDates/LoadInitiated': {
      return Loading;
    }
    case 'AllDates/Loaded': {
      const cabinDates = action.payload.filter(x => x.onModel === 'Cabin');
      const activityDates = action.payload.filter(x => x.onModel === 'Activity');
      return { cabinDates, activityDates };
    }
    case 'AllDates/LoadFailed': {
      return action.payload;
    }
    default: {
      const _ignore: never = action; // check if all cases are handled
      return state;
    }
  }
};
