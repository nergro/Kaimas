import { createOrder } from 'apiServices/orders/orders';
import { Loader } from 'Atoms/Loader';
import { Modal } from 'Atoms/Modal';
import { ReservationForm } from 'Molecules/ReservationForm';
import moment from 'moment';
import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { getAuthStatus } from 'services/localStorage';
import { setActivityReservationStatus, setCabinReservationStatus } from 'services/localStorage';
import { useDates } from 'store/datesStore/hooks';
import { assetIsNotStoreError } from 'store/storeError';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';
import { getDateChunks } from 'utils/getDateChunks';

const StyledLoader = styled(Loader)`
  top: 35vh;
`;

interface Props {
  className?: string;
  isOpen: boolean;
  serviceType: 'Cabin' | 'Activity';
  serviceId: string;
  onClose(): void;
  price: number;
  onSuccessfullSubmit: () => void;
}

export const ReservationModal: FC<Props> = ({
  className,
  isOpen,
  onClose,
  serviceId,
  serviceType,
  price,
  onSuccessfullSubmit,
}) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState<boolean>(false);
  const dates = useDates(serviceId);

  assetIsNotStoreError(dates);

  if (isLoading(dates)) {
    return <StyledLoader />;
  }

  const authStatus = getAuthStatus();
  if (!authStatus) {
    onClose();
    return <></>;
  }

  const onModalClose = (): void => {
    onClose();
  };

  const onSubmit = async (from: Date, to: Date): Promise<boolean> => {
    try {
      setLoading(true);

      const chunks = getDateChunks(from, to);
      const datesIds: string[] = [];
      dates.forEach(date => {
        chunks.forEach(chunk => {
          if (moment(date.date).format('YYYY-MM-DD') === moment(chunk).format('YYYY-MM-DD')) {
            datesIds.push(date.id);
          }
        });
      });

      const response = await createOrder(datesIds, serviceId, serviceType, price);
      if (response === 200) {
        onClose();
        setLoading(false);
        toast.success(t('Your reservation were successful!'));
        onSuccessfullSubmit();
        if (serviceType === 'Activity') {
          setActivityReservationStatus(true);
        } else {
          setCabinReservationStatus(true);
        }
        return true;
      } else {
        setLoading(false);
        return false;
      }
    } catch (error) {
      setLoading(false);
      return false;
    }
  };

  if (loading) return <StyledLoader />;

  return (
    <Modal className={className} isOpen={isOpen} onClose={onModalClose}>
      <ReservationForm onSubmit={onSubmit} availableDates={dates} serviceType={serviceType} />
    </Modal>
  );
};
