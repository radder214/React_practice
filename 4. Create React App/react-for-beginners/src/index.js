import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Strict 모드 다시 적용하고 싶으면 아래 주석들을 풀어라
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);