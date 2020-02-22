import { ReactComponent as CloseIcon } from 'assets/CloseX.svg';
import { InvisibleButton } from 'Atoms/buttons/InvisibleButton';
import { Icon } from 'Atoms/Icon';
import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  className?: string;
  onClick: () => void;
}

const ModalCloseButtonBase: React.FC<Props> = ({ className, onClick }) => {
  return (
    <InvisibleButton className={className} onClick={onClick}>
      <Icon svgComponent={CloseIcon} fill="main" />
    </InvisibleButton>
  );
};

export const ModalCloseButton = styled(ModalCloseButtonBase)`
  width: 20px;
  height: 20px;

  position: absolute;
  top: 25px;
  right: 25px;
`;
