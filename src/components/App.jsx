import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "./Shared/Nav/Nav";
import Footer from "./Shared/Footer/Footer";

import ProtectedRoute from "./Shared/ProtectedRoute/ProtectedRoute";

import AboutPage from "./Pages/AboutPage/AboutPage";
import UserPage from "./Pages/UserPage/UserPage";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";

import "./App.css";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />

        <Route exact path="/about">
          <AboutPage />
        </Route>

        <ProtectedRoute exact path="/user">
          <UserPage />
        </ProtectedRoute>

        <Route exact path="/login">
          {user.id ? <Redirect to="/user" /> : <LoginPage />}
        </Route>

        <Route exact path="/registration">
          {user.id ? <Redirect to="/user" /> : <RegisterPage />}
        </Route>

        <Route exact path="/home">
          {user.id ? <Redirect to="/user" /> : <LandingPage />}
        </Route>
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
