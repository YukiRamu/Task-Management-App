import React, { useContext } from 'react';
import Styles from '../Utils/Styles';
import {
  Button,
  Typography,
} from '@mui/material';
import { AccountContext } from "../../context/AccountContext";

const Header = () => {

  //use context
  const { userList } = useContext(AccountContext);
  console.log("header component", userList); //userList.loginUser.email , userList.users (array)

  //use style component
  const globalClasses = Styles();

  //method
  const getUserName = () => {
    const targetuser = userList.users.filter(elem => elem.email === userList.loginUser.email);
    console.log(targetuser)
    return targetuser[0].name;
  };

  return (
    <>
      <header className={globalClasses.dashBoardHeader}>
        <Typography
          variant="h4"
          component="h1"
          className={globalClasses.headerTxt}>
          Hello {getUserName()}</Typography>
        <Button
          variant="contained"
          type="button"
          className={globalClasses.logoutBtn}
        >Log Out</Button>
      </header>

    </>
  );
};

export default Header;
