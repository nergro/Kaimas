import React, { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components/macro';

export const contentClassNames = {
  base: 'Modal__Content',
  afterOpen: `Modal__Content--after-open`,
  beforeClose: `Modal__Content--before-close`,
};

export const overlayClassNames = {
  base: 'Modal__Overlay',
  afterOpen: 'Modal__Overlay--after-open',
  beforeClose: 'Modal__Overlay--before-close',
};

const DefaultAnimationTime = 200;

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose?: () => void;
  children: ReactNode;
  animationTime?: number;
}

const ModalBase: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  className,
  animationTime = DefaultAnimationTime,
}) => {
  return (
    <ReactModal
      portalClassName={className}
      className={contentClassNames}
      overlayClassName={overlayClassNames}
      isOpen={isOpen}
      onRequestClose={onClose}
      closeTimeoutMS={animationTime}
    >
      {children}
    </ReactModal>
  );
};

export const Modal = styled(ModalBase)`
  .${overlayClassNames.base} {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color ${props => props.animationTime || DefaultAnimationTime}ms linear;
    background-color: rgba(0, 0, 0, 0);
  }

  .${overlayClassNames.afterOpen} {
    background-color: rgba(0, 0, 0, 0.4);
  }

  .${overlayClassNames.beforeClose} {
    background-color: rgba(0, 0, 0, 0);
  }

  .${contentClassNames.base} {
    opacity: 0;
    transition: opacity ${props => props.animationTime || DefaultAnimationTime}ms linear;
    transition-property: opacity;
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
  }
  .${contentClassNames.afterOpen} {
    opacity: 1;
  }
  .${contentClassNames.beforeClose} {
    opacity: 0;
  }
`;
