import React, { useContext } from 'react';
import "./JobTitleCard.css";
import { ThemeContext } from "../../../App";


const JobTitleCard = (props) => {
    
    const dark = useContext(ThemeContext);
    console.log(dark);
    return (
        <div  className="job-title-wrapper">
        <div style={{backgroundColor: dark && 'var(--very-dark-blue)'}} className="job-title-card">
            <img className="logo" style={{backgroundColor: props.logoBackground}} src={props.logo} alt="logo" />
            <h2 style={{color: dark && 'white'}}>{props.company}</h2>
            <p>{props.website}</p>
            <button style={{backgroundColor: dark && 'var(--light-violet)'}}className="company-button">Company Site</button>
        </div>
        </div>

    )
}
export default JobTitleCard
