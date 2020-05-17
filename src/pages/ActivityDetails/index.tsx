import { Button } from 'Atoms/buttons/Button';
import { Loader } from 'Atoms/Loader';
import { H1 } from 'Atoms/text';
import { MainLayout } from 'layouts/MainLayout';
import { ImageGallery } from 'Molecules/ImageGallery';
import { ServiceTabs } from 'Molecules/ServiceTabs';
import { AboutContent } from 'Molecules/tabs/AboutContent';
import { BenefitsContent } from 'Molecules/tabs/BenefitsContent';
import { ReviewsContent } from 'Molecules/tabs/ReviewsContent';
import { ReservationModal } from 'Organisms/ReservationModal';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { getAuthStatus, getLocale } from 'services/localStorage';
import { getReservationStatus } from 'services/localStorage';
import { useActivitiesResource } from 'store/activitiesStore/hooks';
import { useReviews } from 'store/reviewsStore/hooks';
import { assetIsNotStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';
import { Activity } from 'types/activity';

const ContentTop = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentBottom = styled.div`
  padding: 50px 40px;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    flex-direction: column;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 50px 0;
  }
`;

const Title = styled(H1)`
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.6);
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2), 0px -5px 16px rgba(255, 255, 255, 0.3);
`;

const Gallery = styled(ImageGallery)`
  width: 50%;
  box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    order: 1;
    width: 90%;
    margin: 0 auto;
  }
`;

const ReservationButton = styled(Button)`
  align-self: flex-end;
  margin: 0 40px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    align-self: center;
    margin: 20px 0 0 0;
  }
`;

export const ActivityDetails: FC<RouteComponentProps<{ activityId: string }>> = ({ match }) => {
  const { t } = useTranslation();
  const hasReservation = getReservationStatus('activity');
  const isAuth = getAuthStatus();

  const [showReservationButton, setShowReservationButton] = useState<boolean>(true);
  const [reservationModalOpen, setReservationModalOpen] = useState<boolean>(false);
  const activitiesResource = useActivitiesResource();
  const reviews = useReviews(match.params.activityId);

  const locale = getLocale()?.value;

  assetIsNotStoreError(activitiesResource);
  assetIsNotStoreError(reviews);

  if (isLoading(activitiesResource) || isLoading(reviews)) {
    return (
      <MainLayout>
        <Loader />
      </MainLayout>
    );
  }

  const activity: Activity | undefined = activitiesResource.find(
    activity => activity.id === match.params.activityId
  );

  if (!activity) {
    return (
      <MainLayout>
        <p>{t('Sorry! Something went wrong... :(')}</p>
      </MainLayout>
    );
  }

  const images = activity.images.map(image => ({
    original: image.imageUrl,
    thumbnail: image.imageUrl,
  }));

  const name = locale === 'lt' ? activity.nameLT : activity.nameEN;
  const description = locale === 'lt' ? activity.descriptionLT : activity.descriptionEN;

  return (
    <MainLayout>
      <ContentTop>
        <Title size="massive" weight="600">
          {name}
        </Title>
        {hasReservation !== undefined && !hasReservation && isAuth && showReservationButton && (
          <ReservationButton onClick={() => setReservationModalOpen(true)}>
            {t('Reservation')}
          </ReservationButton>
        )}
      </ContentTop>
      <ContentBottom>
        <ServiceTabs
          aboutContent={
            <AboutContent
              price={activity.price}
              capacity={activity.capacity}
              address={activity.address}
              description={description}
            />
          }
          benefitsContent={<BenefitsContent benefits={activity.benefits} />}
          reviewsContent={
            <ReviewsContent
              reviews={reviews}
              serviceId={match.params.activityId}
              serviceType="Activity"
            />
          }
        />
        {images.length > 0 && <Gallery images={images} />}
      </ContentBottom>
      <ReservationModal
        isOpen={reservationModalOpen}
        serviceType="Activity"
        serviceId={match.params.activityId}
        onClose={() => setReservationModalOpen(false)}
        price={activity.price}
        onSuccessfullSubmit={() => setShowReservationButton(false)}
      />
    </MainLayout>
  );
};
