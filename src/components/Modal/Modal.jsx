import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./Modal.css";
import LocationIcon from "../../assets/desktop/icon-location.svg";

const Modal = (props) => {
  const dark = useContext(ThemeContext);

  return (
    <div
      onClick={(e) => {
        !e.target.closest(".modal") && props.changeModal();
      }}
      className="modal-bg"
    >
      <div
        style={
          dark
            ? { backgroundColor: "var(--very-dark-blue)", color: "white" }
            : { backgroundColor: "white" }
        }
        className="modal"
      >
        <div className="modal-location">
          <img src={LocationIcon} />
          <input
            onChange={(e) => {
              props.changeLocationTerm(e.target.value);
            }}
            value={props.location}
            style={dark ? { backgroundColor: "var(--very-dark-blue)" } : null}
            placeholder="Filter by location"
          />
        </div>
        <hr></hr>
        <div className="checkbox-wrapper">
          <input
            onChange={() => {
              props.changeFullTime();
            }}
            checked={props.fullTime}
            className="checkbox"
            id="check"
            type="checkbox"
          />
          <label htmlFor="check">Full Time Only</label>
        </div>
        <button
          onClick={() => {
            props.changeJobData();
            props.changeModal();
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Modal;
