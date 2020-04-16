import { writeReview } from 'apiServices/reviews/reviews';
import { Button } from 'Atoms/buttons/Button';
import { CardButton } from 'Atoms/buttons/CardButton';
import { Input, TextArea } from 'Atoms/Input';
import { H1, P } from 'Atoms/text';
import { Select } from 'Molecules/select/Select';
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

const StyledTextArea = styled(TextArea)`
  margin-top: 10px;
`;

const StyledSelect = styled(Select)`
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

interface SelectOption {
  value: string;
  label: string;
}

interface Props {
  className?: string;
  onSubmit(rating: number, comment: string, recommend: boolean): Promise<boolean>;
}

export const ReviewForm: FC<Props> = ({ className, onSubmit }) => {
  const { t } = useTranslation();

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [recommend, setRecommend] = useState<SelectOption>();

  const [isSubmitSuccess, setIsSubmitSuccess] = useState<boolean>();

  const SelectOptions = [
    { value: 'true', label: t('Yes') },
    { value: 'false', label: t('No') },
  ];

  const onRecommendChange = (selected?: SelectOption): void => {
    selected && setRecommend(selected);
  };

  const onFormSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const isSuccess = await onSubmit(rating, comment, !!recommend?.value);
    if (isSuccess) setIsSubmitSuccess(true);
  };

  return (
    <Form className={className} onSubmit={onFormSubmit}>
      <H1>{t('Review')}</H1>
      <StyledInput
        type="number"
        name="number"
        min={0}
        max={10}
        placeholder={t('Rating')}
        required
        onChange={e => setRating(parseInt(e.target.value))}
      />
      <StyledSelect
        options={SelectOptions}
        onChange={onRecommendChange}
        value={recommend}
        placeholder={t('Would you recommend?')}
        isSearchable={false}
      />
      <StyledTextArea
        name="comment"
        placeholder={t('Comment')}
        required
        onChange={e => setComment(e.target.value)}
        rows={5}
      />
      {isSubmitSuccess && <ErrorMessage color="error">{t('Server error')}</ErrorMessage>}

      <StyledButton type="submit">{t('Publish')}</StyledButton>
    </Form>
  );
};
