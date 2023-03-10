import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'views/App';
import AppProvider from 'providers/AppProviders';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
