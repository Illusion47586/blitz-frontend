import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";
import Compare from "./pages/Compare";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Upload from "./pages/Upload";

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
        <Route path="/compare">
          <Compare />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="*">404</Route>
      </Switch>
    </>
  );
};

export default App;
