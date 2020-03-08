import { contentClassNames, Modal } from 'Atoms/Modal';
import { LoginForm } from 'Molecules/LoginForm';
import { RegisterForm } from 'Molecules/RegisterForm';
import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';

const StyledModal = styled(Modal)`
  .${contentClassNames.base} {
    background: ${props => props.theme.colors.background.primary};
    max-width: 25%;
    width: 100%;
    @media (max-width: ${props => props.theme.breakpoints.l}) {
      max-width: 45%;
    }
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      max-width: 55%;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      max-width: 80%;
    }
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      max-width: 100%;
    }
  }
`;

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
}

export const LoginModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const [showRegister, setShowRegister] = useState(false);

  const onModalClose = (): void => {
    onClose();
    setShowRegister(false);
  };
  return (
    <StyledModal className={className} isOpen={isOpen} onClose={onModalClose}>
      {showRegister ? (
        <RegisterForm onSwitchToLogin={() => setShowRegister(false)} />
      ) : (
        <LoginForm onSwitchToRegister={() => setShowRegister(true)} />
      )}
    </StyledModal>
  );
};
