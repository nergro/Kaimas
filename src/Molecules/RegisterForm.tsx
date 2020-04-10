import { Button } from 'Atoms/buttons/Button';
import { CardButton } from 'Atoms/buttons/CardButton';
import { Input } from 'Atoms/Input';
import { H1, P } from 'Atoms/text';
import React, { FC, FormEvent, useState } from 'react';
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
  onSwitchToLogin(): void;
  onRegister(
    name: string,
    lastName: string,
    email: string,
    password: string,
    phone: string
  ): Promise<string | undefined>;
}

export const RegisterForm: FC<Props> = ({ className, onSwitchToLogin, onRegister }) => {
  const [name, setName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeat, setPasswordRepeat] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (password !== passwordRepeat) {
      setErrorMessage('Passwords must be the same');
      return;
    }
    const message = await onRegister(name, lastName, phone, email, password);
    if (message) setErrorMessage(message);
  };
  return (
    <Form className={className} onSubmit={onSubmit}>
      <H1>Register</H1>

      <StyledInput
        type="text"
        name="Name"
        placeholder="Name"
        required
        onChange={e => setName(e.target.value)}
      />
      <StyledInput
        type="text"
        name="Last Name"
        placeholder="Last Name"
        required
        onChange={e => setLastName(e.target.value)}
      />
      <StyledInput
        type="text"
        name="Email"
        placeholder="Email"
        required
        onChange={e => setEmail(e.target.value)}
      />
      <StyledInput
        type="text"
        name="Phone"
        placeholder="Phone"
        required
        onChange={e => setPhone(e.target.value)}
      />
      <StyledInput
        type="password"
        name="Password"
        placeholder="Password"
        required
        onChange={e => setPassword(e.target.value)}
      />
      <StyledInput
        type="password"
        name="RepeatPassword"
        placeholder="Repeat password"
        required
        onChange={e => setPasswordRepeat(e.target.value)}
      />
      {errorMessage && <ErrorMessage color="error">{errorMessage}</ErrorMessage>}
      <StyledButton type="submit">Register</StyledButton>
      <CardButton onClick={onSwitchToLogin}>Already have an account?</CardButton>
    </Form>
  );
};
