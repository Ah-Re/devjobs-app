import React, { useContext } from 'react';
import { ThemeContext } from "../../../App";
import "./Job.css";


const Job = (props) => {

    const dark = useContext(ThemeContext);

    return (
        
        <div onClick={() => {
            window.location.href="/job-page";
        }}style={{backgroundColor: dark ? "var(--very-dark-blue)" : "white" }} className="job">
            <img className="logo" style={{backgroundColor: props.logoBackground}} src={props.logo} />
                <span style={{color: "var(--dark-gray)" }}>{props.postedAt}</span>
                <span className="dot"></span>
                <span style={{color: "var(--dark-gray)" }}>{props.contract}</span>
                <h2 style={{color: dark && "white"}}>{props.position}</h2>
                <span style={{color: "var(--dark-gray)" }}>{props.company}</span>
                <p style={{color: "var(--violet)", fontWeight: "bold"}}>{props.location}</p>
                
        </div>
        
    )
}

export default Job
