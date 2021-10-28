import React, { useContext } from 'react';
import "./TaskManager.scss";
import { AccountContext } from "../../context/AccountContext";

const TaskManager = () => {

  //use context
  const { userList } = useContext(AccountContext);
  console.log("task manager", userList);

  return (
    <>
      <h1>This is taskmanager home</h1>
    </>
  );
};

export default TaskManager;
