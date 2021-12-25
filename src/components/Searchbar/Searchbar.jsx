import React, { useContext } from 'react';
import { ThemeContext } from "../../App";
import "./Searchbar.css";
import SearchIcon from "../../assets/desktop/icon-search.svg";
import LightSearchIcon from "../../assets/desktop/icon-search-light.svg";
import FilterIcon from "../../assets/mobile/icon-filter.svg";

const Searchbar = () => {
    const dark = useContext(ThemeContext);
    console.log(dark);
    return (
        <div className="searchbar-wrapper">
            <input style={{backgroundColor: dark ? "var(--very-dark-blue)" : "white"}} className="searchbar" type="search" placeholder="Filter by title..." />
            <img className="filter-icon" src={FilterIcon} />
            <button className="search-button">
                <img src={LightSearchIcon} />
            </button>
        </div>
    )
}

export default Searchbar
