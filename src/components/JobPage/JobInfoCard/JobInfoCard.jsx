import React, { useContext } from 'react';
import { ThemeContext } from "../../../App";
import "./JobInfoCard.css";

const JobInfoCard = (props) => {
    const dark = useContext(ThemeContext);


    return (
        <div className="job-info-card-wrapper">
        <div style={{backgroundColor: dark && 'var(--very-dark-blue)'}} className="job-info-card">
            
            <span style={{color: "var(--dark-gray)" }}>{props.postedAt}</span>
            <span className="dot"></span>
            <span style={{color: "var(--dark-gray)" }}>{props.contract}</span>
            <h2 style={{color: dark && 'white'}}>{props.position}</h2>
            <p style={{color: "var(--violet)", fontWeight: "bold"}}>{props.location}</p>
            <button>Apply Now</button>
            <p style={{color: "var(--dark-gray)", lineHeight: "1.5em" }}>{props.description}</p>
            <h2 style={{color: dark && 'white'}}>Requirements</h2>
            <p>{props.requirementsContent}</p>
            <ul>
            {props.requirementsItems.map(item => {
                return <li>{item}</li>
            })}
            </ul>
            <h2 style={{color: dark && 'white'}}>What You Will Do</h2> 
            <p>{props.roleContent}</p>
            
            
            {props.roleItems.map((item, index) => {
                return <div style={{display: 'flex'}}><span style={{color: "var(--violet)", fontWeight: "bold"}}>{index+1}</span><span style={{marginLeft: "1rem", lineHeight: "1.5em", color: "var(--dark-gray)"}}>{item}</span></div>
            })}

            
            

        </div>
        </div>

    )
}

export default JobInfoCard
