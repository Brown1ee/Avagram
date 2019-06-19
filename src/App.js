import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TaskId from "./components/TaskId";
import withAuth from "./components/withAuth";
import Logout from "./components/Logout";
import "react-image-lightbox/style.css";
import LoggInn from "./components/LoggInn";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={withAuth(Home)} />
        <Route path="/secret" component={withAuth(TaskId, true)} />
        <Route path="/logout" component={withAuth(Logout, true)} />
        <Route path="/authenticate" component={withAuth(LoggInn)} />
      </Switch>
    </div>
  );
};

export default App;
