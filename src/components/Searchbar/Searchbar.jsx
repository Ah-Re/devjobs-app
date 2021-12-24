import React from 'react';
import "./Searchbar.css";
import SearchIcon from "../../assets/desktop/icon-search.svg";
import LightSearchIcon from "../../assets/desktop/icon-search-light.svg";
import FilterIcon from "../../assets/mobile/icon-filter.svg";

const Searchbar = () => {
    return (
        <div className="searchbar-wrapper">
            <input className="searchbar" type="search" placeholder="Filter by title..." />
            <img className="filter-icon" src={FilterIcon} />
            <button className="search-button">
                <img src={LightSearchIcon} />
            </button>
        </div>
    )
}

export default Searchbar
