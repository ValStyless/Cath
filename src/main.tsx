import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Aquí es donde importamos Tailwind y nuestras fuentes

// React.StrictMode nos ayuda a detectar problemas potenciales durante el desarrollo
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);