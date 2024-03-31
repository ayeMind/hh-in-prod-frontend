import React from 'react';
import ReactDOM from 'react-dom/client'
import { Providers } from './providers';
import { router } from "./router";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers router={router} />
  </React.StrictMode>,
)