import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Styles from '../Utils/Styles';
import {
  Button,
  Typography,
} from '@mui/material';
import { AppContext } from "../../context/AppContext";

const Header = () => {

  //use context
  const { userList } = useContext(AppContext);

  //use style component
  const globalClasses = Styles();

  //route
  let history = useHistory();

  //method
  const getUserName = () => {
    const targetuser = userList.users.filter(elem => elem.email === userList.loginUser.email);
    return targetuser[0].name;
  };

  const logout = () => {
    history.push("/login");
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
          onClick={logout}
        >Log Out</Button>
      </header>

    </>
  );
};

export default Header;
