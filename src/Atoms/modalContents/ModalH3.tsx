import { H3 as BaseH3 } from 'Atoms/text';
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
}

const H3: React.FC<Props> = ({ className, children }) => {
  return (
    <BaseH3 className={className} size="small" font="Poppins" weight="600" lineHeight="unset">
      {children}
    </BaseH3>
  );
};

export const ModalH3 = styled(H3)`
  text-align: left;
  margin: 0;
`;
