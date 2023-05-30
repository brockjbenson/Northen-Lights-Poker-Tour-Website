import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "../Nav/Nav.css";

function Nav() {
  const history = useHistory();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-left">
          <img src={"/images/logo.png"} alt="" className=" w-12" />
          <h1 className="nav-logo-text">NLPT</h1>
        </div>
        <div className="nav-right">
          <Link className="nav-link" to="/home">
            HOME
          </Link>

          <Link className="nav-link" to="/members">
            MEMBERS
          </Link>

          <Link className="nav-link" to="/stats">
            STATS
          </Link>

          <Link className="nav-link" to="/about">
            ABOUT
          </Link>
        </div>
      </div>
    </>
  );
}

export default Nav;
