import { Button } from 'Atoms/buttons/Button';
import { Tab } from 'Atoms/buttons/Tab';
import { DatePicker } from 'Atoms/DatePicker';
import { Input } from 'Atoms/Input';
import React, { FC, useState } from 'react';
import styled from 'styled-components/macro';

const Tabs = styled.div`
  display: flex;
`;

const StyledTab = styled(Tab)``;

const Wrapper = styled.div`
  width: 55%;
`;

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

const StyledPicker = styled(DatePicker)`
  margin-top: 10px;
`;

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin-top: 20px;
  align-self: center;
`;

export const BookingTable: FC = () => {
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  return (
    <Wrapper>
      <Tabs>
        <StyledTab active>Places</StyledTab>
        <StyledTab>Activities</StyledTab>
      </Tabs>
      <Form>
        <StyledPicker selected={from} onChange={day => setFrom(day)} placeholderText="From" />
        <StyledPicker selected={to} onChange={day => setTo(day)} placeholderText="To" />
        <StyledInput type="text" name="Start" placeholder="Start" />
        <StyledInput type="text" name="Return" placeholder="Return" />
        <StyledInput type="text" name="Adults" placeholder="Adults" />
        <StyledInput type="text" name="Child" placeholder="Child" />
        <StyledButton>SEARCH</StyledButton>
      </Form>
    </Wrapper>
  );
};
