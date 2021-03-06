import React from "react";
import {
  HashRouter,
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import TaskManager from "../TaskManager/TaskManager";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const App = () => {
  return (
    <>
      {/* React Router */}
      <HashRouter basename={process.env.PUBLIC_URL + "/"}>
        {/* Router Switch */}
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={TaskManager} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </HashRouter>
    </>
  );
};

export default App;
