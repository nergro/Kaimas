import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { BrowserRouter as Router } from 'react-router-dom';
import { lightTheme } from 'services/theme/lightTheme';

import { App } from './App';
import { ErrorBoundary } from './errorBoundary';
import { GlobalStyle } from './globalStyle';
import { ProvidersInjector } from './ProvidersInjector';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
Modal.setAppElement('#root');

const storeProviders: any = [];

ReactDOM.render(
  //TODO: Add error message/page to show for global ErrorBoundary
  <ErrorBoundary error={null}>
    <Router>
      <ProvidersInjector providers={storeProviders}>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </ProvidersInjector>
    </Router>
  </ErrorBoundary>,
  document.getElementById('root')
);

serviceWorker.unregister();