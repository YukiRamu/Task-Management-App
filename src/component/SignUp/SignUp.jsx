import React, { useContext } from 'react';
import "./SignUp.scss";
import { AccountContext } from "../../context/AccountContext";

const SignUp = () => {

  //use context
  const { loginUser } = useContext(AccountContext);

  return (
    <>
      <h2>This is sign up page</h2>
    </>
  );
};

export default SignUp;
