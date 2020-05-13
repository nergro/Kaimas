import { doSubscribe } from 'apiServices/subscribe/subscribe';
import { ReactComponent as ArrowSVG } from 'assets/UI/RightArrow.svg';
import { InputWithIcon } from 'Atoms/Input';
import { SimpleLoader } from 'Atoms/SimpleLoader';
import { P } from 'Atoms/text';
import React, { FC, FormEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const StyledInput = styled(InputWithIcon)`
  align-self: normal;
  margin-top: 15px;
  input {
    border: 1px solid ${props => props.theme.colors.footer.border};
  }
`;

export const NewsletterForm: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasSubscribed, setHasSubscribed] = useState<'initial' | 'subscribed' | 'error'>('initial');
  const { t } = useTranslation();

  if (isLoading) {
    return <SimpleLoader />;
  }
  if (hasSubscribed === 'subscribed') {
    return <P color="warning">{t('Thank you!')}</P>;
  }
  if (hasSubscribed === 'error') {
    return <P color="warning">{t('Already subscribed')}</P>;
  }
  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await doSubscribe(email);
      setHasSubscribed('subscribed');
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setHasSubscribed('error');
    }
  };

  return (
    <StyledInput
      icon={ArrowSVG}
      inputName="email"
      inputType="email"
      inputPlaceholder={t('Email Address')}
      onChange={e => setEmail(e.target.value)}
      onSubmit={onSubmit}
      required
    />
  );
};
