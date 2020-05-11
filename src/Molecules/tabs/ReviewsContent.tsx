import { Button } from 'Atoms/buttons/Button';
import { Review } from 'Atoms/Review';
import { P } from 'Atoms/text';
import { ReviewModal } from 'Organisms/ReviewModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useOrdersList } from 'store/ordersStore/hooks';
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

const StyledP = styled(P)`
  text-align: center;
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
  const orders = useOrdersList();

  const onModalClose = (): void => {
    setReviewModalOpen(false);
  };

  let hadReservation = false;
  orders.forEach(x => {
    if (x.id === serviceId) {
      hadReservation = true;
    }
  });

  return (
    <Wrapper className={className}>
      {hadReservation && (
        <StyledButton onClick={() => setReviewModalOpen(true)}>{t('Write a review')}</StyledButton>
      )}
      <Reviews>
        {reviews.length > 0 ? (
          reviews.map(review => <StyledReview key={review.id} review={review} />)
        ) : (
          <StyledP size="huge" weight="600">
            {t('No reviews yet')}
          </StyledP>
        )}
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
