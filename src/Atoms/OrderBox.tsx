import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
  isUpcoming?: boolean;
  children: ReactNode;
}

const OrderBoxBase: FC<Props> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export const OrderBox = styled(OrderBoxBase)`
  border: 2px solid
    ${props =>
      props.isUpcoming ? props.theme.colors.order.borderUpcoming : props.theme.colors.order.border};
  padding: 15px;
  display: flex;
  flex-direction: column;
`;
