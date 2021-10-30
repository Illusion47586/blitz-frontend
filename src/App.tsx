import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Switch location={location}>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/store">
          <Store />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </>
  );
};

export default App;
