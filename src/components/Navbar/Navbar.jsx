import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
import SunIcon from "../../assets/desktop/icon-sun.svg";
import MoonIcon from "../../assets/desktop/icon-moon.svg";
import "./Navbar.css";

const Navbar = (props) => {
  const dark = useContext(ThemeContext);
  const navigate = useNavigate();
  return (
    <nav className="nav-bar">
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        devjobs
      </h1>
      <div>
        <img src={SunIcon} />
        <div
          onClick={() => {
            props.changeMode();
          }}
          className="toggle-btn"
        >
          <div
            style={dark === true ? { marginLeft: "auto" } : null}
            className="inner-circle"
          ></div>
        </div>
        <img src={MoonIcon} />
      </div>
    </nav>
  );
};

export default Navbar;
