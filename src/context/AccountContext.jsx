import React, { createContext, useReducer, useState, useEffect } from 'react';
import AccountReducer from '../reducer/AccountReducer';

//create context
const AccountContext = createContext();

const AccountProvider = (props) => {

  //global state
  const [errorFlg, setErrorFlg] = useState(false);

  //reducer methods
  const [userList, dispatchUserList] = useReducer(AccountReducer, [], () => {
    const localStorageUserData = localStorage.getItem("userList");
    console.log(JSON.parse(localStorageUserData));
    return {
      users: localStorageUserData ? JSON.parse(localStorageUserData) : [{
        name: "admin",
        email: "admin@gmail.com",
        password: "admin123",
        showPassword: false,
      }],
      loginUser: {
        email: "",
        password: "",
        showPassword: false
      }
    };
  });

  //local storage
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList.users));
  }, [userList.users]);


  return (
    <AccountContext.Provider value={{
      userList,
      dispatchUserList,
      errorFlg,
      setErrorFlg
    }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountProvider as default, AccountContext };
