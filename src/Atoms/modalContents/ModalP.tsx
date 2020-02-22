import { P as BaseP } from 'Atoms/text';
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
}

const P: React.FC<Props> = ({ className, children }) => {
  return <BaseP className={className}>{children}</BaseP>;
};

export const ModalP = styled(P)`
  text-align: left;
  margin: 0 0 10px;
`;
