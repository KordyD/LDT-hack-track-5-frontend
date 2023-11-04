import React from 'react';
import ReactDOM from 'react-dom/client';
import '@mantine/core/styles.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router.tsx';
import { MantineProvider } from '@mantine/core';
import { theme } from './theme/Theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
