import { Button } from 'Atoms/buttons/Button';
import { CardButton } from 'Atoms/buttons/CardButton';
import { Input } from 'Atoms/Input';
import { H1, P } from 'Atoms/text';
import React, { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  onSwitchToRegister(): void;
  onLogin(email: string, password: string): Promise<string | undefined>;
}

export const LoginForm: FC<Props> = ({ className, onSwitchToRegister, onLogin }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const message = await onLogin(email, password);
    if (message) setErrorMessage(message);
  };

  return (
    <Form className={className} onSubmit={onSubmit}>
      <H1 uppercase>{t('Login')}</H1>
      <StyledInput
        type="email"
        name="Email"
        placeholder={t('Email')}
        required
        onChange={e => setEmail(e.target.value)}
      />
      <StyledInput
        type="password"
        name="Password"
        placeholder={t('Password')}
        required
        onChange={e => setPassword(e.target.value)}
      />
      {errorMessage && <ErrorMessage color="error">{errorMessage}</ErrorMessage>}
      <StyledButton type="submit">{t('Login')}</StyledButton>
      <CardButton onClick={onSwitchToRegister}>{t("Don't have an account?")}</CardButton>
    </Form>
  );
};
