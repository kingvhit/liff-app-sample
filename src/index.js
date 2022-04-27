import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import liff from '@line/liff';


liff.init({
  liffId: process.env.REACT_APP_LIFF_APP_ID, // Use own liffId
}).then(() => {
  console.log('Liff config successfully!')
  if (liff.isLoggedIn()) {
    console.log('Liff has been logged in!')
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.log('Liff has not loggined yet!')
    liff.login()
  }

}).catch((ex) => {
  console.log('Liff config error!')
})


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
