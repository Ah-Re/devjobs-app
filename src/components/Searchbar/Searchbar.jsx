import React, { useContext, useState, useEffect } from "react";
import { ThemeContext, SearchContext } from "../../App";
import "./Searchbar.css";
import SearchIcon from "../../assets/desktop/icon-search.svg";
import LightSearchIcon from "../../assets/desktop/icon-search-light.svg";
import FilterIcon from "../../assets/mobile/icon-filter.svg";
import LocationIcon from "../../assets/desktop/icon-location.svg";

const Searchbar = (props) => {
  const dark = useContext(ThemeContext);
  const [placeholderText, setPlaceholderText] = useState("Filter by title...");

  useEffect(() => {
    window.addEventListener("resize", function () {
      var w =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (w > 1000) {
        setPlaceholderText("Filter by title, companies, expertise...");
      } else {
        setPlaceholderText("Filter by title...");
      }
    });
  });

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
          placeholder={placeholderText}
        />
      </div>
      <div className="location-search-wrapper">
        <img src={LocationIcon} />
        <input
          style={{ backgroundColor: dark ? "var(--very-dark-blue)" : "white" }}
          onChange={(e) => {
            props.changeLocationTerm(e.target.value);
          }}
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
          <input
            onChange={() => {
              props.changeFullTime();
            }}
            className="checkbox"
            id="check"
            type="checkbox"
          />
          <label style={{ color: dark && "white" }} htmlFor="check">
            Full Time
          </label>
        </div>
        <button
          onClick={() => {
            props.changeJobData();
          }}
          className="search-button"
        >
          <img src={LightSearchIcon} />
          <span className="button-text">Search</span>
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
