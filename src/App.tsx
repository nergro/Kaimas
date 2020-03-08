import { AppLayout } from 'layouts/AppLayout';
import { NotFound } from 'pages/404';
import { Cabins } from 'pages/Cabins';
import { Home } from 'pages/Home';
import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

export const App: FC = () => {
  return (
    <AppLayout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cabins" component={Cabins} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  );
};
