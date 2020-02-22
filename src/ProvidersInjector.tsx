import React, { ElementType, FC, ReactNode } from 'react';

export interface Props {
  providers: ElementType[];
  children: ReactNode;
}

export const ProvidersInjector: FC<Props> = ({
  providers: [Provider, ...restProviders],
  children,
}) => {
  if (!Provider) {
    return <>{children}</>;
  }

  return (
    <Provider>
      <ProvidersInjector providers={restProviders}>{children}</ProvidersInjector>
    </Provider>
  );
};
