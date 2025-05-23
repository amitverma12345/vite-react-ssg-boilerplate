import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import App from './App';

export function render(url: string) {
  const queryClient = new QueryClient();
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <App />
          </StaticRouter>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );

  // Get the Helmet state after rendering
  const { helmet } = helmetContext;

  return { html, helmetContext: { helmet } };
} 