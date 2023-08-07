import React from 'react';
import ReactDOM from 'react-dom/client';
import '../style.css';
import { App } from './info/app/App';

ReactDOM.createRoot(document.getElementById('container')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
