import React from 'react';
import SunIcon from "../../assets/desktop/icon-sun.svg";
import MoonIcon from "../../assets/desktop/icon-moon.svg";
import "./Navbar.css";

const Navbar = (props) => {


    return (
        <nav className="nav-bar">
            <h1>devjobs</h1>
            <img src={SunIcon} />
            <div onClick={() => {
                props.changeMode();
                console.log(props.dark);
            }} className="toggle-btn">
                <div style={props.dark === true ? {marginLeft: "auto"} : null} className="inner-circle">

                </div>
            </div>
            <img src={MoonIcon} />
        </nav>
    )
}

export default Navbar
