import { Button } from 'Atoms/buttons/Button';
import { CardButton } from 'Atoms/buttons/CardButton';
import { Input } from 'Atoms/Input';
import { H1 } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Form = styled.form`
  background: ${props => props.theme.colors.background.primary};
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.div`
  flex-grow: 1;
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
  onSwitchToRegister(): void;
}

export const LoginForm: FC<Props> = ({ className, onSwitchToRegister }) => {
  return (
    <Form className={className}>
      <H1>LOGIN</H1>
      <Inputs>
        <StyledInput type="email" name="Email" placeholder="Email" />
        <StyledInput type="password" name="Password" placeholder="Password" />
      </Inputs>
      <StyledButton>LOGIN</StyledButton>
      <CardButton onClick={onSwitchToRegister}>Don&apos;t have an account?</CardButton>
    </Form>
  );
};
