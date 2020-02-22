export interface StoreError {
  type: 'Error';
  message?: string;
  errorCode?: string;
}

export const newStoreError = (message: string, errorCode: string): StoreError => ({
  type: 'Error',
  message,
  errorCode,
});

export const isStoreError = (error: unknown): error is StoreError =>
  typeof error === 'object' && error !== null && typeof (error as StoreError).type === 'string';
