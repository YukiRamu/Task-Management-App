import React, { useState, useContext } from 'react';
import "./SignUp.scss";
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

const SignUp = () => {

  //use style component
  const globalClasses = Styles();

  //route
  let history = useHistory();

  //use context
  const { userList, dispatchUserList, errorFlg, setErrorFlg } = useContext(AccountContext);

  //private state
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  //methods
  const handleChange = (e, prop) => {
    setNewUser({ ...newUser, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setNewUser({ ...newUser, showPassword: !newUser.showPassword, });
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const signUp = (e) => {
    console.log("sign up clicked");
    e.preventDefault();
    //validation check
    if (newUser.name === "" || newUser.email === "" || newUser.password === "") {
      setErrorFlg(true);
    } else {
      //check if the user is already in the local storage (email match)
      const matchUser = userList.users.filter(e => e.email === newUser.email);


      //つづき


      dispatchUserList({ type: "SIGNUP", payload: newUser });
      //clear input and error
      setNewUser({
        name: "",
        email: "",
        password: "",
        showPassword: false,
      });
      setErrorFlg(false);
      //SIGNUP SUCCESSFUL!
      history.push("/login");
    }
  };

  const clearError = () => {
    setErrorFlg(false);
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
              title="Hey, Welcome. Sign Up to access Task Management"
              titleTypographyProps={{ variant: 'h4' }}
            />
            {/* ============ Form ============ */}
            <Box
              component="form"
              noValidate
              className={globalClasses.authForm}
              onSubmit={signUp}
            >
              {/* Name input */}
              <FormControl
                required
                className={globalClasses.authInput}
                sx={{ m: 1, width: '25ch' }}
                variant="outlined"
                error={errorFlg}
                id="outlined-error-helper-text" //for validation error
              >
                <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>

                <OutlinedInput
                  id="outlined-adornment-name"
                  label="Name"
                  placeholder="Enter your name here"
                  value={newUser.name}
                  onChange={(e) => handleChange(e, "name")}

                // startAdornment={
                //   <InputAdornment position="start">
                //     <MdLock className={globalClasses.icon} />
                //   </InputAdornment>
                // }

                />
                {/* validation error msg */}
                {errorFlg && <FormHelperText id="outlined-adornment-name">Name is required</FormHelperText>}
              </FormControl>

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
                  value={newUser.email}
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
                  type={newUser.showPassword ? 'text' : 'password'}
                  label="Password"
                  placeholder="Enter your password here"
                  value={newUser.password}
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
                        {newUser.showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                {/* validation error msg */}
                {errorFlg && <FormHelperText id="outlined-adornment-password">Password is required</FormHelperText>}
              </FormControl>

              {/* SignUp Button */}
              <Button
                variant="contained"
                type="submit"
                className={globalClasses.authButton}
              >Sign Up</Button>
            </Box>
          </CardContent>

          {/* Link to Sign up page */}
          {/* <CardActions > */}
          <Typography variant="h6" component="p" className={globalClasses.links}>
            Already a Member!
            <Link
              to={{
                pathname: "/login",
              }}
              className={globalClasses.routeLink}
              onClick={clearError}>Log in</Link>
          </Typography>
          {/* </CardActions> */}
        </Card>
      </Container>
    </>
  );
};

export default SignUp;
