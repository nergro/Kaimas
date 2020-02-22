import { AppLayout } from 'layouts/AppLayout';
import { NotFound } from 'pages/404';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from 'pages/Home';
export const App: FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};
