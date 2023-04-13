import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// CUSTOM COMPONENTS
import Nav from "../../Shared/Nav/Nav";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="bg-landingImg h-screen">
      <Nav />
      <section className="hero-section">
        <header>
          <h1>Welcome to, Northern Lights Poker Tour</h1>
        </header>
      </section>
    </div>
  );
}

export default LandingPage;
