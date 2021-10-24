import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  return (
    <Switch location={location}>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <div />
      </Route>
      <Route path="*">{/* 404 */}</Route>
    </Switch>
  );
};

export default App;
