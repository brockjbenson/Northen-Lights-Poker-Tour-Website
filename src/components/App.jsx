import React, { useEffect } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import Nav from "./Shared/Nav/Nav";
import Footer from "./Shared/Footer/Footer";

import AboutPage from "./Pages/AboutPage/AboutPage";

import LandingPage from "./Pages/LandingPage/LandingPage";

import "./App.css";
import MembersPage from "./Pages/MembersPage/MembersPage";
import StatsPage from "./Pages/StatsPage/StatsPage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

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

        <Route exact path="/members">
          <MembersPage />
        </Route>

        <Route exact path="/stats">
          <StatsPage />
        </Route>

        <Route exact path="/home">
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
