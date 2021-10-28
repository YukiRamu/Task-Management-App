import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './component/App/App';
import AccountProvider from "./context/AccountContext";

ReactDOM.render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

