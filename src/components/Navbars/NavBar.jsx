import React, { useState } from "react";
import "./NavBar.css";

import SearchBar from "../../components/SearchBar/SearchBar";
import NavigationBar from "../../components/Navbars/NavigationBar/NavigationBar";
import MobileNavbar from "../../components/Navbars/MobileNavbar/MobileNavbar";

export default function NavBar({loggedIn,setLoggedIn}) {
  let [toogleMenu, setToggleMenu] = useState(true);
  return (
    <>
      {toogleMenu ? (
        <div className="banner">
          <NavigationBar
            toogleMenu={toogleMenu}
            setToggleMenu={setToggleMenu}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
          <div className="bannerInner">
            <img
              src="/banners/banner1.jpg"
              alt="banner"
              className="bannerImg"
            />
            <div className="bannerTxt">
              <div className="title">Donate Food</div>
              <div className="tag">Hunger doesn't have to exist,</div>
              <div className="tag">
                <i>lets end it together.</i>
              </div>
              <div className="searchbar">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <MobileNavbar
          toogleMenu={toogleMenu}
          setToggleMenu={setToggleMenu}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
      )}
    </>
  );
}
