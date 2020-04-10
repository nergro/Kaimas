import { Loader } from 'Atoms/Loader';
import { contentClassNames, Modal } from 'Atoms/Modal';
import { LoginForm } from 'Molecules/LoginForm';
import { RegisterForm } from 'Molecules/RegisterForm';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { handleLogin, handleRegistration } from 'services/auth';
import { getAuthStatus } from 'services/localStorage';
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

const StyledLoader = styled(Loader)`
  top: 35vh;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
}

export const LoginModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authStatus = getAuthStatus();
  if (authStatus) {
    onClose();
    return <></>;
  }

  const onModalClose = (): void => {
    onClose();
    setShowRegister(false);
  };

  const onLogin = async (email: string, password: string): Promise<string | undefined> => {
    if (isLoading) return;
    setIsLoading(true);

    const response = await handleLogin(email, password);
    setIsLoading(false);
    if (response) {
      return response;
    } else {
      onClose();
      toast.success(`You logged in!`);
    }
  };

  const onRegister = async (
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  ): Promise<string | undefined> => {
    if (isLoading) return;
    setIsLoading(true);

    const response = await handleRegistration(name, lastName, email, password, phone);
    setIsLoading(false);
    if (response) {
      return response;
    } else {
      onClose();
      toast.success(`Your registration is successful!`);
    }
  };

  if (isLoading) return <StyledLoader />;

  return (
    <StyledModal className={className} isOpen={isOpen} onClose={onModalClose}>
      {showRegister ? (
        <RegisterForm onSwitchToLogin={() => setShowRegister(false)} onRegister={onRegister} />
      ) : (
        <LoginForm onSwitchToRegister={() => setShowRegister(true)} onLogin={onLogin} />
      )}
    </StyledModal>
  );
};
