// import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
import 'react-toastify/dist/ReactToastify.min.css';

import React, { FC } from 'react';
import { ToastContainer as BaseToastContainer } from 'react-toastify';
import styled from 'styled-components/macro';

const StyledToastContainer = styled(BaseToastContainer)`
  top: 66px;
`;

export const ToastContainer: FC = () => <StyledToastContainer autoClose={5000} />;
