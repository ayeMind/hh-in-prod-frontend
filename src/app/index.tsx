import React from 'react';
import ReactDOM from 'react-dom/client'
import { Providers } from './providers';
import { router } from './router';

import './reset.css'
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
        <Providers router={router} />
  </React.StrictMode>,
)