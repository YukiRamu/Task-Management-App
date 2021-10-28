import React, { useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Container,
} from "@material-ui/core";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Button,
  Typography,
  InputAdornment,
  FormControl,
  FormHelperText,
  OutlinedInput,
  InputLabel,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { MdEmail, MdLock } from "react-icons/md";
import Styles from '../Utils/Styles';
import { AccountContext } from "../../context/AccountContext";

const Login = () => {

  //use style component
  const globalClasses = Styles();

  //route
  let history = useHistory();

  //use context
  const { userList, dispatchUserList, errorFlg, setErrorFlg } = useContext(AccountContext);

  //private state
  const [user, setUser] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  //methods
  const handleChange = (e, prop) => {
    setUser({ ...user, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setUser({ ...user, showPassword: !user.showPassword, });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const login = (e) => {
    e.preventDefault();
    //validation check
    if (user.email === "" || user.password === "") {
      setErrorFlg(true);
    } else {
      //user validation:
      //#1 check if the user is in the local storage (email match)
      const matchUser = userList.users.filter(e => e.email === user.email);
      console.log(matchUser);
      if (matchUser.length !== 0) {
        //#2 password check
        if (matchUser[0].password != user.password) {
          alert("Password is incorrect. Please try again.");
          //clear input and error
          clearError();
          clearInput();
        } else {
          //LOGIN SUCCESSFUL!
          dispatchUserList({ type: "LOGIN", payload: user });
          //clear input and error
          clearError();
          clearInput();
          history.push("/home");
        }
      } else {
        alert("You don't have an account yet. Please create one.");
        //clear input and error
        clearError();
        clearInput();
      }
    }
  };

  const clearError = () => {
    setErrorFlg(false);
  };

  const clearInput = () => {
    setUser({
      email: "",
      password: "",
      showPassword: false,
    });
  };

  return (
    <>
      <Container className={globalClasses.appContainer}>
        {/* ============ Login, Signup panel ============ */}
        <Card sx={{ minWidth: 275 }} className={globalClasses.authCard}>
          <CardContent className={globalClasses.authCardContent}>
            {/* Welcome message */}
            <CardHeader
              className={globalClasses.authCardHeader}
              title="Hey, Welcome. Login to access Task Management"
              titleTypographyProps={{ variant: 'h4' }}
            />
            {/* ============ Form ============ */}
            <Box
              component="form"
              noValidate
              className={globalClasses.authForm}
              onSubmit={login}
            >
              {/* Email input */}
              <FormControl
                required
                className={globalClasses.authInput}
                sx={{ m: 1, width: '25ch' }}
                variant="outlined"
                error={errorFlg}
                id="outlined-error-helper-text" //for validation error
              >
                <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-email"
                  label="Email"
                  placeholder="Enter your email here"
                  value={user.email}
                  onChange={(e) => handleChange(e, "email")}

                // startAdornment={
                //   <InputAdornment position="start">
                //     <MdLock className={globalClasses.icon} />
                //   </InputAdornment>
                // }

                />
                {/* validation error msg */}
                {errorFlg && <FormHelperText id="outlined-adornment-email">Email is required</FormHelperText>}
              </FormControl>

              {/* Password input */}
              <FormControl
                required
                className={globalClasses.authInput}
                sx={{ m: 1, width: '25ch' }}
                variant="outlined"
                error={errorFlg}
                id="outlined-error-helper-text" //for validation error
              >
                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-password"
                  type={user.showPassword ? 'text' : 'password'}
                  label="Password"
                  placeholder="Enter your password here"
                  value={user.password}
                  onChange={(e) => handleChange(e, "password")}

                  // startAdornment={
                  //   <InputAdornment position="start">
                  //     <MdLock className={globalClasses.icon} />
                  //   </InputAdornment>
                  // }

                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        className={globalClasses.icon}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {user.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* validation error msg */}
                {errorFlg && <FormHelperText id="outlined-adornment-password">Password is required</FormHelperText>}
              </FormControl>

              {/* Login Button */}
              <Button
                variant="contained"
                type="submit"
                className={globalClasses.authButton}
              >Login</Button>
            </Box>
          </CardContent>

          {/* Link to Sign up page */}
          {/* <CardActions > */}
          <Typography variant="h6" component="p" className={globalClasses.links}>
            Not a Member yet ?
            <Link
              to={{
                pathname: "/signup",
              }}
              className={globalClasses.routeLink}
              onClick={clearError}>Sign up</Link>
          </Typography>
          {/* </CardActions> */}
        </Card>
      </Container>
    </>
  );
};

export default Login;
