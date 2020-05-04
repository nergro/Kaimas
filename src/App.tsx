import { AppLayout } from 'layouts/AppLayout';
import moment from 'moment';
import { NotFound } from 'pages/404';
import { Activities } from 'pages/Activities';
import { ActivityDetails } from 'pages/ActivityDetails';
import { CabinDetails } from 'pages/CabinDetails';
import { Cabins } from 'pages/Cabins';
import { Home } from 'pages/Home';
import { SubscribeCancellation } from 'pages/SubscribeCancellation';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import {
  getLocale,
  setActivityReservationStatus,
  setCabinReservationStatus,
  setLocale,
} from 'services/localStorage';
import { useOrdersList } from 'store/ordersStore/hooks';

export const App: FC = () => {
  const [reservedCabin, setReservedCabin] = useState<boolean>(false);
  const [reservedActivity, setReservedActivity] = useState<boolean>(false);
  const { i18n } = useTranslation();
  useEffect(() => {
    const locale = getLocale();
    if (locale !== null) {
      i18n.changeLanguage(locale.value);
    } else {
      i18n.changeLanguage('lt');
      setLocale({ value: 'lt', label: 'LT' });
    }
  }, [i18n]);

  const orders = useOrdersList();

  useEffect(() => {
    orders.forEach(x => {
      x.reservedDates.forEach(date => {
        if (moment(date.date).isAfter(new Date())) {
          if (x.onModel === 'Activity') {
            setReservedActivity(true);
          } else {
            setReservedCabin(true);
          }
        }
      });
    });
  }, [orders]);

  setActivityReservationStatus(reservedActivity);
  setCabinReservationStatus(reservedCabin);

  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cabins" exact component={Cabins} />
        <Route path="/cabins/:cabinId" exact component={CabinDetails} />
        <Route path="/activities" exact component={Activities} />
        <Route path="/activities/:activityId" exact component={ActivityDetails} />
        <Route path="/subscribtion/:token" exact component={SubscribeCancellation} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};
