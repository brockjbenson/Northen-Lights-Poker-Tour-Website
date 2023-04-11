import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();

  const sendToLogin = () => {
    history.push("/login");
  };

  return (
    <div className="nav">
      <div className="nav-left">
        <Link to="/home">
          <h2 className="nav-title">NLPT</h2>
        </Link>
      </div>

      <div className="nav-middle">
        <Link className="navLink" to="/home">
          HOME
        </Link>

        <Link className="navLink" to="/about">
          ABOUT
        </Link>
      </div>
      <div className="nav-right">
        {!user.id ? (
          <Link className="login-link" to="/login">
            LOGIN
          </Link>
        ) : (
          <Link className="navLink" to="/user">
            <FaUserCircle className="nav-user-icon" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default Nav;
