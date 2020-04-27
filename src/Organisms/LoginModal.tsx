import { Modal } from 'Atoms/Modal';
import { LoginForm } from 'Molecules/LoginForm';
import { RegisterForm } from 'Molecules/RegisterForm';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { handleLogin, handleRegistration } from 'services/auth';
import { getAuthStatus } from 'services/localStorage';

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
}

export const LoginModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const { t } = useTranslation();

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

    const response = await handleLogin(email, password, [
      t('Invalid credentials'),
      t('Network error'),
    ]);
    setIsLoading(false);
    if (response) {
      return response;
    } else {
      onClose();
      toast.success(t('You logged in!'));
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

    const response = await handleRegistration(name, lastName, email, password, phone, [
      t('User already exists'),
      t('Entered data is not correct'),
      t('Network error'),
    ]);
    setIsLoading(false);
    if (response) {
      return response;
    } else {
      onClose();
      toast.success(t('Your registration is successful!'));
    }
  };

  return (
    <Modal className={className} isOpen={isOpen} onClose={onModalClose}>
      {showRegister ? (
        <RegisterForm onSwitchToLogin={() => setShowRegister(false)} onRegister={onRegister} />
      ) : (
        <LoginForm onSwitchToRegister={() => setShowRegister(true)} onLogin={onLogin} />
      )}
    </Modal>
  );
};
