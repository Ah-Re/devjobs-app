import React, { useContext } from "react";
import "./JobPage.css";
import Navbar from "../Navbar/Navbar";
import JobTitleCard from "./JobTitleCard/JobTitleCard";
import JobInfoCard from "./JobInfoCard/JobInfoCard";
import { ThemeContext } from "../../App";
import JobData from "../../data.json";
import { useLocation } from "react-router-dom";

const JobPage = (props) => {
  const { state } = useLocation();
  const dark = useContext(ThemeContext);

  return (
    <div className="job-page">
      <Navbar changeMode={props.changeMode} />

      <JobTitleCard
        logoBackground={state.logoBackground}
        company={state.company}
        website={state.website}
        logo={state.logo}
      />
      <JobInfoCard
        postedAt={state.postedAt}
        contract={state.contract}
        position={state.position}
        location={state.location}
        description={state.description}
        requirementsContent={state.requirements.content}
        requirementsItems={state.requirements.items}
        roleContent={state.role.content}
        roleItems={state.role.items}
      />

      <div
        style={{ backgroundColor: dark && "var(--very-dark-blue)" }}
        className="button-wrapper"
      >
        <div className="bottom-page-text">
          <h3 style={{ color: dark && "white" }}>{state.position}</h3>
          <p>{state.company}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default JobPage;
