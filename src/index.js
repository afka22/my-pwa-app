import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Aktifkan service worker untuk mendukung PWA (offline & cache)
serviceWorkerRegistration.register();

// Aktifkan pengukuran performa aplikasi (opsional)
reportWebVitals();
