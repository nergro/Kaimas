import { AppLayout } from 'layouts/AppLayout';
import { NotFound } from 'pages/404';
import { Activities } from 'pages/Activities';
import { CabinDetails } from 'pages/CabinDetails';
import { Cabins } from 'pages/Cabins';
import { Home } from 'pages/Home';
import { Reservation } from 'pages/Reservation';
import React, { FC, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Route, Switch } from 'react-router-dom';
import { getLocale } from 'services/localStorage';

export const App: FC = () => {
  const { i18n } = useTranslation();
  useEffect(() => {
    const locale = getLocale();
    if (locale !== null) {
      i18n.changeLanguage(locale.value);
    }
  }, [i18n]);

  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cabins" exact component={Cabins} />
        <Route path="/cabins/:cabinId" exact component={CabinDetails} />
        <Route path="/cabins/:cabinId/reservation" exact component={Reservation} />
        <Route path="/activities" exact component={Activities} />
        <Route path="/activities/:activityId" exact component={CabinDetails} />
        <Route path="/activities/:activityId/reservation" exact component={Reservation} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};
