import React from 'react';
import ReactDOM from 'react-dom/client';
import IndexLayout from './Layout/IndexLayout';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <IndexLayout />
  </React.StrictMode>
);
