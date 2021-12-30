import React from 'react';
import "./JobPage.css";
import Navbar from "../Navbar/Navbar";
import JobTitleCard from "./JobTitleCard/JobTitleCard";
import JobData from "../../data.json";
import { useLocation } from "react-router-dom";

const JobPage = (props) => {
    const { state } = useLocation();
    
    console.log(state.logo);
    return (
        <div className="job-page">
            <Navbar changeMode={props.changeMode}/>
            
            <JobTitleCard logoBackground={state.logoBackground}
                            company={state.company}
                            website={state.website}
                            logo={state.logo}
                            
            />

        </div>
    )
}

export default JobPage;
