import { Button } from 'Atoms/buttons/Button';
import { Review } from 'Atoms/Review';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';
import { Review as ReviewType } from 'types/review';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled(Button)`
  align-self: flex-end;
`;

const Reviews = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledReview = styled(Review)`
  margin-top: 15px;
`;

interface Props {
  className?: string;
  reviews: ReviewType[];
}

export const ReviewsContent: FC<Props> = ({ className, reviews }) => {
  const { t } = useTranslation();
  return (
    <Wrapper className={className}>
      <StyledButton>{t('Write a review')}</StyledButton>
      <Reviews>
        {reviews.map(review => (
          <StyledReview key={review.id} review={review} />
        ))}
      </Reviews>
    </Wrapper>
  );
};
