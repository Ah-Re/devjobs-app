import React, { useContext, useState } from "react";
import { ThemeContext, SearchContext } from "../../App";
import "./Searchbar.css";
import SearchIcon from "../../assets/desktop/icon-search.svg";
import LightSearchIcon from "../../assets/desktop/icon-search-light.svg";
import FilterIcon from "../../assets/mobile/icon-filter.svg";
import LocationIcon from "../../assets/desktop/icon-location.svg";

const Searchbar = (props) => {
  const dark = useContext(ThemeContext);
  const searchTerm = useContext(SearchContext);

  return (
    <div className="searchbar-wrapper">
      <div className="title-search-wrapper">
        <img src={SearchIcon} />
        <input
          style={{ backgroundColor: dark ? "var(--very-dark-blue)" : "white" }}
          onChange={(e) => {
            props.changeSearchTerm(e.target.value);
          }}
          className="searchbar"
          type="search"
          placeholder="Filter by title..."
        />
      </div>
      <div className="location-search-wrapper">
        <img src={LocationIcon} />
        <input
          style={{ backgroundColor: dark ? "var(--very-dark-blue)" : "white" }}
          className="location-search"
          type="search"
          placeholder="Filter by location..."
        />
      </div>
      <img
        onClick={() => {
          props.changeModal();
        }}
        className="filter-icon"
        src={FilterIcon}
      />

      <div
        style={{ backgroundColor: dark && "var(--very-dark-blue)" }}
        className="third-input-box"
      >
        <div className="checkbox-wrapper">
          <input className="checkbox" id="check" type="checkbox" />
          <label style={{ color: dark && "white" }} for="check">
            Full Time
          </label>
        </div>
        <button onClick={() => {}} className="search-button">
          <img src={LightSearchIcon} />
          <span className="button-text">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
