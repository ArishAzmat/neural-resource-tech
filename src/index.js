import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/style/Custom.css';
import './assets/style/Fontawesome-all.min.css';
import './assets/style/Style-liberty.css';
import './assets/js/counter';
import './assets/js/demobar-script';
import './assets/js/navigation8a54';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
