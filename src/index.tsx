import 'react-datepicker/dist/react-datepicker.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import 'services/http';
import './i18n';

import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';
import { lightTheme } from 'services/theme/lightTheme';
import { ActivitiesStoreProvider } from 'store/activitiesStore/provider';
import { CabinsStoreProvider } from 'store/cabinsStore/provider';
import { DatesStoreProvider } from 'store/datesStore/provider';
import { OrdersStoreProvider } from 'store/ordersStore/provider';
import { ReviewsStoreProvider } from 'store/reviewsStore/provider';
import { ThemeProvider } from 'styled-components/macro';
import { ToastContainer } from 'ToastContainer';

import { App } from './App';
import { ErrorBoundary } from './errorBoundary';
import { GlobalStyle } from './globalStyle';
import { ProvidersInjector } from './ProvidersInjector';
import * as serviceWorker from './serviceWorker';
Modal.setAppElement('#root');

const storeProviders = [
  CabinsStoreProvider,
  ActivitiesStoreProvider,
  ReviewsStoreProvider,
  DatesStoreProvider,
  OrdersStoreProvider,
];

ReactDOM.render(
  //TODO: Add error message/page to show for global ErrorBoundary
  <ErrorBoundary error={null}>
    <Router>
      <ProvidersInjector providers={storeProviders}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <App />
          <ToastContainer />
        </ThemeProvider>
      </ProvidersInjector>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorker.unregister();
