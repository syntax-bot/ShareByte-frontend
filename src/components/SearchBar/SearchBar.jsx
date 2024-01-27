import React, { useState } from "react";

import "./SearchBar.css";

export default function SearchBar() {
  let [searchPlaceholder,setSearchPlaceholder]=useState()
  return (
    <div className="searchOuterDiv">
      <div className="search1">
        <div className="iconBox">
          <img className="icon" src="/icons/location.svg" alt="location pointer" />
        </div>
        <input type="text" placeholder="" className="searchInput" />

      </div>
      <hr className="searchhr"/>
      <div className="search2">
        <button>
          <span>Pin Current Loaction</span>
          <img className="icon" src="/icons/current-location.svg" alt="current-location icon" />
        </button>
      </div>
    </div>
  );
}
