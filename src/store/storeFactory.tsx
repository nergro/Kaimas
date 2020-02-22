import React, { FC, ReactNode } from 'react';

import { Dispatch, Reducer } from './types';

interface Store<S, A> {
  stateContext: React.Context<S | undefined>;
  dispatchContext: React.Context<Dispatch<A> | undefined>;
  provider: FC<ProviderProps<S>>;
}

export interface ProviderProps<S> {
  children: ReactNode;
  initialState?: S;
}

export const storeFactory = <S, A>(reducer: Reducer<S, A>, initialState: S): Store<S, A> => {
  const StateContext = React.createContext<S | undefined>(undefined);
  const DispatchContext = React.createContext<Dispatch<A> | undefined>(undefined);

  const Provider: FC<ProviderProps<S>> = ({ children, initialState: initialStateOverride }) => {
    const [state, dispatch] = React.useReducer(reducer, initialStateOverride || initialState);
    return (
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
      </StateContext.Provider>
    );
  };

  return {
    stateContext: StateContext,
    dispatchContext: DispatchContext,
    provider: Provider,
  };
};
