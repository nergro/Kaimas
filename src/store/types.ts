import { StoreError } from './storeError';

export interface Action<T> {
  readonly type: T;
}

export interface ActionWithPayload<T, P> extends Action<T> {
  readonly payload: P;
}

export const Loading = 'Loading';
export type LoadingType = typeof Loading;
export const isLoading = (state: unknown): state is LoadingType => state === Loading;

export type Resource<T> = T | LoadingType | StoreError;

export type Reducer<S, A> = (state: S, action: A) => S;
export type Dispatch<A> = (action: A) => void;
