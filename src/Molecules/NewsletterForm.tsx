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
  const [hasSubscribed, setHasSubscribed] = useState<boolean>(false);
  const { t } = useTranslation();

  if (isLoading) {
    return <SimpleLoader />;
  }
  if (hasSubscribed) {
    return <P color="warning">{t('Thank you!')}</P>;
  }
  const onSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    await doSubscribe(email);
    setHasSubscribed(true);
    setIsLoading(false);
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
