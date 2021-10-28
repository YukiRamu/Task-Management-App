import React, { createContext, useReducer, useState, useEffect } from 'react';
import AccountReducer from '../reducer/AccountReducer';

//create context
const AccountContext = createContext();

const AccountProvider = (props) => {

  //global state
  const [globalState, setState] = useState("");

  //initialState
  const initialState = {
    userList: {
      email: "",
      password: "",
      showPassword: false
    },
    loginUser: {
      email: "",
      password: "",
      showPassword: false
    }
  };

  //reducer methods
  const [loginUser, dispatchLoginUser] = useReducer(AccountReducer, initialState);

  return (
    <AccountContext.Provider value={{
      loginUser,
      dispatchLoginUser
    }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountProvider as default, AccountContext };
