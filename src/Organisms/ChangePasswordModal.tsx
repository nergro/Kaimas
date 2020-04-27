import { Button } from 'Atoms/buttons/Button';
import { Input } from 'Atoms/Input';
import { Modal } from 'Atoms/Modal';
import { H1, P } from 'Atoms/text';
import React, { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { handlePasswordChange } from 'services/auth';
import { getAuthStatus } from 'services/localStorage';
import styled from 'styled-components/macro';

const Form = styled.form`
  background: ${props => props.theme.colors.background.primary};
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled(Input)`
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin: 20px 0;
  align-self: center;
`;

const ErrorMessage = styled(P)`
  margin-top: 10px;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  onClose(): void;
}

export const ChangePasswordModal: FC<Props> = ({ className, isOpen, onClose }) => {
  const { t } = useTranslation();
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const isAuth = getAuthStatus();
  if (!isAuth) {
    onClose();
    return <></>;
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    console.log('CLICKED');
    if (isLoading) return;
    if (password !== passwordRepeat) {
      setErrorMessage(t('Passwords must be the same'));
    } else {
      setIsLoading(true);
      setErrorMessage('');
      const isSuccess = await handlePasswordChange(password);
      setIsLoading(false);
      if (isSuccess) {
        onClose();
        toast.success(t('Your password has been changed!'));
      } else {
        setErrorMessage(t('Network error'));
      }
    }
  };

  return (
    <Modal className={className} isOpen={isOpen} onClose={onClose}>
      <Form className={className} onSubmit={onSubmit}>
        <H1 uppercase>{t('Change password')}</H1>
        <StyledInput
          type="password"
          name="Password"
          placeholder={t('New password')}
          required
          onChange={e => setPassword(e.target.value)}
        />
        <StyledInput
          type="password"
          name="PasswordRepeat"
          placeholder={t('Repeat new password')}
          required
          onChange={e => setPasswordRepeat(e.target.value)}
        />
        {errorMessage && <ErrorMessage color="error">{errorMessage}</ErrorMessage>}
        <StyledButton type="submit">{t('Submit')}</StyledButton>
      </Form>
    </Modal>
  );
};
