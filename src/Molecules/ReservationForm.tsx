import { Button } from 'Atoms/buttons/Button';
import { DatePicker } from 'Atoms/DatePicker';
import { H1, P } from 'Atoms/text';
import moment from 'moment';
import React, { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { AvailableDate } from 'types/availableDate';

const NotAvailable = styled.div`
  padding: 100px;
`;

const Form = styled.form`
  background: ${props => props.theme.colors.background.primary};
  padding: 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  padding: 10px 10%;
  margin: 20px 0;
  align-self: center;
`;

const ErrorMessage = styled(P)`
  margin-top: 10px;
`;

const StyledPicker = styled(DatePicker)`
  margin-top: 10px;
`;

interface Props {
  className?: string;
  onSubmit(from: Date, to: Date): Promise<boolean>;
  availableDates: AvailableDate[];
}

export const ReservationForm: FC<Props> = ({ className, onSubmit, availableDates }) => {
  const { t } = useTranslation();
  const [from, setFrom] = useState<Date | null>();
  const [to, setTo] = useState<Date | null>();

  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>();
  const [isDatesCorrect, setIsDatesCorrect] = useState<boolean>();

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (from && to) {
      const formatedFrom = moment(from).format('YYYY-MM-DD');
      const formatedTo = moment(to).format('YYYY-MM-DD');
      if (formatedFrom < formatedTo || formatedTo === formatedFrom) {
        setIsDatesCorrect(true);
      }
    }
    if (isDatesCorrect && from && to) {
      const isSuccess = await onSubmit(from, to);
      if (isSuccess) setIsSubmitSuccess(true);
    }
  };

  if (availableDates.length === 0) {
    return (
      <NotAvailable>
        <P>{t('Reservation currently unavailable')}</P>
      </NotAvailable>
    );
  }

  const includeDates = availableDates.map(x => moment(x.date).toDate());

  return (
    <Form className={className} onSubmit={onFormSubmit}>
      <H1>{t('Reservation')}</H1>
      <StyledPicker
        dateFormat="dd/MM/yyyy"
        selected={from}
        onChange={day => setFrom(day)}
        placeholderText={t('From')}
        includeDates={includeDates}
        required
      />
      <StyledPicker
        dateFormat="dd/MM/yyyy"
        selected={to}
        onChange={day => setTo(day)}
        placeholderText={t('To')}
        includeDates={includeDates}
        required
      />
      {isDatesCorrect !== undefined && !isDatesCorrect && (
        <ErrorMessage color="error">{t('Dates are not correct')}</ErrorMessage>
      )}

      {isSubmitSuccess && <ErrorMessage color="error">{t('Server error')}</ErrorMessage>}

      <StyledButton type="submit">{t('Reserve')}</StyledButton>
    </Form>
  );
};
