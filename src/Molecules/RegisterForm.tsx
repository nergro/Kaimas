import { Button } from 'Atoms/buttons/Button';
import { CardButton } from 'Atoms/buttons/CardButton';
import { Input } from 'Atoms/Input';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { H1 } from 'Atoms/text';

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

interface Props {
  className?: string;
  onSwitchToLogin(): void;
}

export const RegisterForm: FC<Props> = ({ className, onSwitchToLogin }) => {
  return (
    <Form className={className}>
      <H1>Register</H1>

      <StyledInput type="text" name="Name" placeholder="Name" />
      <StyledInput type="text" name="Last Name" placeholder="Last Name" />
      <StyledInput type="text" name="Email" placeholder="Email" />
      <StyledInput type="password" name="Password" placeholder="Password" />
      <StyledInput type="password" name="RepeatPassword" placeholder="Repeat password" />
      <StyledButton>Register</StyledButton>
      <CardButton onClick={onSwitchToLogin}>Already have an account?</CardButton>
    </Form>
  );
};
