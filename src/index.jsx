import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App/App';
import "./index.scss"
import AccountProvider from "./context/AccountContext";

ReactDOM.render(
  <React.StrictMode>
    <AccountProvider>
      <App />
    </AccountProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

