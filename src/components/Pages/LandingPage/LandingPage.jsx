import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// CUSTOM COMPONENTS
import Nav from "../../Shared/Nav/Nav";

function LandingPage() {
  const history = useHistory();

  return (
    <div className="bg-landingImg h-screen bg-no-repeat bg-auto bg-center">
      <Nav />
    </div>
  );
}

export default LandingPage;
