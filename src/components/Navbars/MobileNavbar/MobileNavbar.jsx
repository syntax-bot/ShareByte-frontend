import { useState } from "react";
import { Link } from "react-router-dom";

import close from "/icons/close.png";

import "./MobileNavbar.css";

import Login from "../../Auth/Login/Login";
import Signup from "../../Auth/Signup/Signup";

let MobileNavbar = ({ toogleMenu, setToggleMenu, loggedIn, setLoggedIn }) => {
  let [auth, setAuth] = useState({
    closed: true,
    login: false,
    signup: false,
  });

  const logoutHandler = () => {
    setLoggedIn(false);
    localStorage.removeItem("auth");
  };

  return (
    <>
      <div className="mobileNavBar">
        <div className="BackBtn">
          <img
            className="mobileNavBarBackBtn"
            src={close}
            alt="menu bar"
            onClick={() => setToggleMenu((val) => !val)}
          />
        </div>
        <div className="mobileNavbaritems">
          <div className="mobileNavbaritem">
            <Link to="#" className="menuItemLink">
              Get Started
            </Link>
          </div>
          <div className="mobileNavbaritem">
            <Link to="#" className="menuItemLink">
              About
            </Link>
          </div>
          {loggedIn ? (
            <>
              <div className="mobileNavbaritem">
                <Link to="#" className="menuItemLink">
                  Dashboard
                </Link>
              </div>
              <div className="mobileNavbaritem" onClick={logoutHandler}>
                logout
              </div>
            </>
          ) : (
            <>
              <div
                className="mobileNavbaritem"
                onClick={() =>
                  setAuth({ closed: false, login: true, signup: false })
                }
              >
                Log in
              </div>
              <div
                className="mobileNavbaritem"
                onClick={() =>
                  setAuth({ closed: false, login: false, signup: true })
                }
              >
                Sign up
              </div>
            </>
          )}
        </div>
      </div>
      <div className="modals">
        {auth?.login ? (
          <Login setAuth={setAuth} setLoggedIn={setLoggedIn} />
        ) : null}
        {auth?.signup ? <Signup setAuth={setAuth} /> : null}
      </div>
    </>
  );
};

export default MobileNavbar;
