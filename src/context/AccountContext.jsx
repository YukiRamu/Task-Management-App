import React, { createContext, useReducer, useState, useEffect } from 'react';
import AccountReducer from '../reducer/AccountReducer';
import TaskReducer from "../reducer/TaskReducer";

//create context
const AccountContext = createContext();

const AccountProvider = (props) => {

  //global state
  const [errorFlg, setErrorFlg] = useState(false);

  //reducer methods
  const [userList, dispatchUserList] = useReducer(AccountReducer, [], () => {
    const localStorageUserData = localStorage.getItem("userList");
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

  const [taskList, dispatchTaskList] = useReducer(TaskReducer, [], () => {
    const localStorageTaskData = localStorage.getItem("taskList");
    return {
      tasks: localStorageTaskData ? JSON.parse(localStorageTaskData) : [{
        taskName: "",
        description: "",
      }],
    };
  });

  //local storage
  useEffect(() => {
    localStorage.setItem("userList", JSON.stringify(userList.users));
  }, [userList.users]);

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList.tasks));
  }, [taskList.tasks]);

  return (
    <AccountContext.Provider value={{
      userList,
      dispatchUserList,
      taskList,
      dispatchTaskList,
      errorFlg,
      setErrorFlg
    }}>
      {props.children}
    </AccountContext.Provider>
  );
};

export { AccountProvider as default, AccountContext };
