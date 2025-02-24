import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

export const API_URL = "http://127.0.0.1:8000/api/dataset_library/"
export const API_URL_STATUSES = "http://127.0.0.1:8000/api/dataset_library/statuses/"
export const API_STATIC_MEDIA = "http://127.0.0.1:8000/"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
