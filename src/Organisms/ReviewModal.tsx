import { writeReview } from 'apiServices/reviews/reviews';
import { Loader } from 'Atoms/Loader';
import { Modal } from 'Atoms/Modal';
import { ReviewForm } from 'Molecules/ReviewForm';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { getAuthStatus } from 'services/localStorage';
import styled from 'styled-components/macro';

const StyledLoader = styled(Loader)`
  top: 35vh;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  serviceType: 'Cabin' | 'Activity';
  serviceId: string;
  onClose(): void;
}

export const ReviewModal: FC<Props> = ({ className, isOpen, onClose, serviceId, serviceType }) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const authStatus = getAuthStatus();
  if (!authStatus) {
    onClose();
    return <></>;
  }

  const onModalClose = (): void => {
    onClose();
  };

  const onSubmit = async (
    rating: number,
    comment: string,
    recommend: boolean
  ): Promise<boolean> => {
    setIsLoading(true);
    try {
      const response = await writeReview(serviceId, serviceType, rating, comment, recommend);
      if (response === 200) {
        onClose();
        toast.success(t('Your review was submitted!'));
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      setIsLoading(false);
      return false;
    }
  };

  if (isLoading) return <StyledLoader />;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onModalClose}>
      <ReviewForm onSubmit={onSubmit} />
    </Modal>
  );
};
