import { CustomError, ErrorCodes } from 'types/errorTypes';

export interface StoreError {
  type: 'StoreError';
  message: string;
  code?: ErrorCodes;
}

export const newStoreError = (message: string, code: ErrorCodes): StoreError => ({
  type: 'StoreError',
  message,
  code,
});

export const isStoreError = (error: unknown): error is StoreError =>
  typeof error === 'object' && error !== null && (error as StoreError).type === 'StoreError';

export function assetIsNotStoreError<T>(object: StoreError | T): asserts object is T {
  if (isStoreError(object)) {
    throw new CustomError(object.message, object.code);
  }
}
