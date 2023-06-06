import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../LandingPage/LandingPage.css";

// CUSTOM COMPONENTS
import Nav from "../../Shared/Nav/Nav";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="landing-main">
      <Nav />
      <div className="landing-message-container">
        <div className="landing-message">
          <h1 className="text-blue-950 font-extrabold text-5xl">
            Welcome to the Northern Lights Poker Tour
          </h1>
          <p className="text-2xl pt-6">
            Build your bankroll and your friendships with the NLPT. Click get
            started to learn more.
          </p>
        </div>
        <button className="landing-get-started-button">Get Started</button>
      </div>
    </div>
  );
}

export default LandingPage;
