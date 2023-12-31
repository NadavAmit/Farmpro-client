import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {BrowserRouter} from 'react-router-dom';
const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      retry:false
    }
  }
});


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} >
      <BrowserRouter>
      <ReactQueryDevtools />
    <App />
    </BrowserRouter>
    </QueryClientProvider>'
  </React.StrictMode>
);
