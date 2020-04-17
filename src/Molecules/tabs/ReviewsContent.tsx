import { Button } from 'Atoms/buttons/Button';
import { Review } from 'Atoms/Review';
import { ReviewModal } from 'Organisms/ReviewModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getAuthStatus } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Review as ReviewType } from 'types/review';
import { ScrollbarMixin } from 'utils/styleMixins';

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
  max-height: 500px;
  overflow: auto;
  ${ScrollbarMixin};
`;

const StyledReview = styled(Review)`
  margin: 15px 15px 0 0;
`;

interface Props {
  className?: string;
  reviews: ReviewType[];
  serviceType: 'Cabin' | 'Activity';
  serviceId: string;
}

export const ReviewsContent: FC<Props> = ({ className, reviews, serviceType, serviceId }) => {
  const { t } = useTranslation();
  const [reviewModalOpen, setReviewModalOpen] = useState(false);

  const onModalClose = (): void => {
    setReviewModalOpen(false);
  };

  const isAuth = getAuthStatus();

  return (
    <Wrapper className={className}>
      {isAuth && (
        <StyledButton onClick={() => setReviewModalOpen(true)}>{t('Write a review')}</StyledButton>
      )}
      <Reviews>
        {reviews.map(review => (
          <StyledReview key={review.id} review={review} />
        ))}
      </Reviews>
      <ReviewModal
        isOpen={reviewModalOpen}
        onClose={onModalClose}
        serviceId={serviceId}
        serviceType={serviceType}
      />
    </Wrapper>
  );
};
