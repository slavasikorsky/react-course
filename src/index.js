import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import PublicRoute from './routes/PublicRoute';

import './assets/css/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PublicRoute />
    </BrowserRouter>
  </React.StrictMode>
);