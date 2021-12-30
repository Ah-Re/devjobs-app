import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from "../../../App";
import JobPage from "../../JobPage/JobPage";
import "./Job.css";


const Job = (props) => {

    const dark = useContext(ThemeContext);
    const navigate = useNavigate();

    
    return (
        
        <div style={{backgroundColor: dark ? "var(--very-dark-blue)" : "white" }} className="job">
            <img className="logo" style={{backgroundColor: props.logoBackground}} src={props.logo} />
                <span style={{color: "var(--dark-gray)" }}>{props.postedAt}</span>
                <span className="dot"></span>
                <span style={{color: "var(--dark-gray)" }}>{props.contract}</span>
                <h2 style={{color: dark && "white"}}>{props.position}</h2>
               <span onClick={() => {
                   navigate("jobs/" + props.company, {
                       state: {logoBackground: props.logoBackground,
                                logo: props.logo,
                                company: props.company,
                                postedAt: props.postedAt,
                                contract: props.contract,
                                position: props.position,
                                location: props.location,
                                description: props.description,
                                requirements: props.requirements,
                                role: props.role,
                                website: props.website
                                }
                   });
               }} style={{color: "var(--dark-gray)" }}>{props.company}</span> 
                <p style={{color: "var(--violet)", fontWeight: "bold"}}>{props.location}</p>
                
        </div>
        
    )
}

export default Job
