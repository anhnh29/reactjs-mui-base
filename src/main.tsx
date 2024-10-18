import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import QueryProvider from './common/provider/query-provider.tsx';
import LayoutConfigProvider from './common/provider/theme-config-provider.tsx';
import Routes from './common/routes/index.tsx';
import { ToasterConfig } from '@/common/components/common/index.ts';
import theme from './common/utils/theme.ts';
import { ThemeProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutConfigProvider>
      <ThemeProvider theme={theme}>
        <QueryProvider>
          <ToasterConfig />
          <Routes />
        </QueryProvider>
      </ThemeProvider>
    </LayoutConfigProvider>
  </React.StrictMode>,
);
