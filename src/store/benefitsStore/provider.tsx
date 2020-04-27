import { StoreError } from 'store/storeError';
import { storeFactory } from 'store/storeFactory';
import { Action as GenericAction, ActionWithPayload, Resource } from 'store/types';
import { BenefitType } from 'types/benefit';

import { reducer } from './reducer';

export type Action =
  | GenericAction<'Benefits/LoadInitiated'>
  | ActionWithPayload<'Benefits/Loaded', BenefitType[]>
  | ActionWithPayload<'Benefits/LoadFailed', StoreError>;

export type Benefits = BenefitType[];

export type State = Resource<Benefits> | null;

const initialState: State = null;

export const {
  dispatchContext: BenefitsDispatchContext,
  stateContext: BenefitsStateContext,
  provider: BenefitsStoreProvider,
} = storeFactory(reducer, initialState);
