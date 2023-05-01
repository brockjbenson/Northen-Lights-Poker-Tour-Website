import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// CUSTOM COMPONENTS
import Nav from "../../Shared/Nav/Nav";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="bg-landingImg h-screen bg-no-repeat bg-auto bg-center">
      <Nav />
      <div className="w-[100%]">
        <div className="w-[450px] mx-auto flex-col">
          <h1 className="text-blue-950 font-extrabold text-5xl">
            Welcome to the Northern Lights Poker Tour
          </h1>
          <p className="text-2xl pt-6">
            Build your bankroll and your friendships with the NLPT. Click get
            started to learn more.
          </p>
          <button className="bg-blue-950 text-white rounded-full items-center p-2 px-4">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
