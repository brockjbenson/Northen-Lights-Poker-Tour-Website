import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterPage/RegisterForm";
import Nav from "../../Shared/Nav/Nav";
import Footer from "../../Shared/Footer/Footer";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="home-container">
      <Nav />
      <section>Hello</section>
    </div>
  );
}

export default LandingPage;
