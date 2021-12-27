import React, { useContext, useState } from 'react';
import { ThemeContext, SearchContext } from "../../App";
import "./Searchbar.css";
import SearchIcon from "../../assets/desktop/icon-search.svg";
import LightSearchIcon from "../../assets/desktop/icon-search-light.svg";
import FilterIcon from "../../assets/mobile/icon-filter.svg";

const Searchbar = (props) => {
    const dark = useContext(ThemeContext);
    const searchTerm = useContext(SearchContext);
    
    
    return (
        <div className="searchbar-wrapper">
            <input style={{backgroundColor: dark ? "var(--very-dark-blue)" : "white"}} onChange={(e) => {
                props.changeSearchTerm(e.target.value);
            }} className="searchbar" type="search" placeholder="Filter by title..." />
            <img className="filter-icon" src={FilterIcon} />
            <button onClick={() => {
                
            }} className="search-button">
                <img src={LightSearchIcon} />
            </button>
        </div>
    )
}

export default Searchbar
