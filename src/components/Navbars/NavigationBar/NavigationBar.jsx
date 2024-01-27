import { useState } from "react";
import { Link } from "react-router-dom";

import menuBar from "/icons/menu.png";
import downArrow from "/icons/down-arrow.png";

import "./NavigationBar.css";
import Login from "../../Auth/Login/Login";
import Signup from "../../Auth/Signup/Signup";

let NavigationBar = ({ toogleMenu, setToggleMenu, loggedIn, setLoggedIn }) => {
  let [auth, setAuth] = useState({
    closed: true,
    login: false,
    signup: false,
  });
  let [dropDownFlag, setDropDownFlag] = useState(false);

  const logoutHandler = () => {
    setLoggedIn(false);
    localStorage.removeItem("auth");
  };

  return (
    <div className="NavBar">
      <img
        className="mobileNavBarBtn"
        src={menuBar}
        alt="MenuBar"
        onClick={() => setToggleMenu((val) => !val)}
      />
      <div className="deskTopNavBar">
        <div className="leftSide">
          <i
            onClick={() => {
              window. scrollTo({ top: 0, left: 0, behavior: 'smooth' }) ;
              
            }}
          >
            shareBite
          </i>
        </div>
        <div className="rightSide">
          <div className="menuItem">
            <Link to="/feed" className="menuItemLink">
              Get Started
            </Link>{" "}
          </div>
          <div className="menuItem">
            <Link to="/about" className="menuItemLink">
              About
            </Link>{" "}
          </div>

          {loggedIn ? (
            <div
              className="menuItem NavBarUserName"
              onClick={() => {
                setDropDownFlag(!dropDownFlag);
              }}
            >
              UserName
              <img src={downArrow} alt="arrow" className="arrow" />
              {dropDownFlag ? (
                <div className="dropDownMenuNavBar">
                  <div className="dropDownMenuItem">
                    <Link to="/feed/profile">DashBoard</Link>
                  </div>
                  <div className="dropDownMenuItem" onClick={logoutHandler}>
                    LogOut
                  </div>
                </div>
              ) : (
                <></>
              )}
            </div>
          ) : (
            <>
              <div
                className="menuItem"
                onClick={() =>
                  setAuth({ closed: false, login: true, signup: false })
                }
              >
                Log in
              </div>
              <div
                className="menuItem"
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
    </div>
  );
};

export default NavigationBar;
