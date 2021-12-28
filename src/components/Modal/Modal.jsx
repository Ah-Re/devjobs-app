import React, { useContext } from 'react';
import { ThemeContext } from "../../App";
import "./Modal.css";
import LocationIcon from "../../assets/desktop/icon-location.svg";

const Modal = () => {
    const dark = useContext(ThemeContext);

    return (
        <div  style={dark ? {backgroundColor: "var(--very-dark-blue)", color: "white"} : {backgroundColor: "white"}} className="modal">
            <div className="modal-location">
            <img src={LocationIcon} />
            <input style={dark ? {backgroundColor: "var(--very-dark-blue)"} : null} placeholder="Filter by location"/>
            </div>
            <hr></hr>
            <div className="checkbox-wrapper">
            <input className="checkbox" id="check" type="checkbox"/> 
            <label for="check">Full Time Only</label>
            </div>
            <button>Search</button>
        </div>
    )
}

export default Modal
