import React from 'react';
import SunIcon from "../../assets/desktop/icon-sun.svg";
import MoonIcon from "../../assets/desktop/icon-moon.svg";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="nav-bar">
            <h1>devjobs</h1>
            <img src={SunIcon} />
            <img src={MoonIcon} />
        </nav>
    )
}

export default Navbar
