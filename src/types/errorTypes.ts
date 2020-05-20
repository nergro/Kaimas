import { ReactElement } from 'react';

type CustomErrorType = 'Info' | 'Debug' | 'Warning' | 'Error' | 'FatalError' | 'NetworkError';

export class CustomError extends Error {
  type: CustomErrorType;
  code?: ErrorCodes;

  constructor(message: string, code?: ErrorCodes) {
    super(message);

    this.code = code;
    this.type = 'Error';
  }
}

export interface ErrorRenderProps {
  error?: Error;
}

export const isErrorRenderFunction = <T>(
  val: ((error: ErrorRenderProps) => ReactElement) | T
): val is (error: ErrorRenderProps) => ReactElement => {
  return val instanceof Function && typeof val === 'function';
};

export enum ErrorCodes {
  AxiosNotInitialized = 100,
  MissingMandatoryProps = 101,
  StoreNotInitialized = 1001,
}
