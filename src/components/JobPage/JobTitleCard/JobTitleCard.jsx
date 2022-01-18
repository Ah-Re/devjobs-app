import React, { useContext } from "react";
import "./JobTitleCard.css";
import { ThemeContext } from "../../../App";

const JobTitleCard = (props) => {
  const dark = useContext(ThemeContext);
  return (
    <div className="job-title-wrapper">
      <div
        style={{ backgroundColor: dark && "var(--very-dark-blue)" }}
        className="job-title-card"
      >
        <img
          className="logo"
          style={{ backgroundColor: props.logoBackground }}
          src={props.logo}
          alt="logo"
        />
        <div className="job-title-text">
          <h2 style={{ color: dark && "white" }}>{props.company}</h2>
          <p>{props.website}</p>
        </div>
        <div className="job-title-button-wrapper">
          <button
            style={
              dark
                ? { backgroundColor: "var(--midnight)", color: "white" }
                : {
                    backgroundColor: "var(--light-gray)",
                    color: "var(--violet)",
                  }
            }
            className="company-button"
          >
            Company Site
          </button>
        </div>
      </div>
    </div>
  );
};
export default JobTitleCard;
