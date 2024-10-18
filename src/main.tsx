import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.css';
import QueryProvider from './common/provider/query-provider.tsx';
import LayoutConfigProvider from './common/provider/theme-config-provider.tsx';
import Routes from './common/routes/index.tsx';
import { ToasterConfig } from '@/common/components/common/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LayoutConfigProvider>
      <QueryProvider>
        <ToasterConfig />
        <Routes />
      </QueryProvider>
    </LayoutConfigProvider>
  </React.StrictMode>,
);
