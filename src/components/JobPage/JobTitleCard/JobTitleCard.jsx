import React from 'react';
import "./JobTitleCard.css";


const JobTitleCard = (props) => {
    
    
    return (
        <div className="job-title-wrapper">
        <div className="job-title-card">
            <img className="logo" style={{backgroundColor: props.logoBackground}} src={props.logo} alt="logo" />
            <h2>{props.company}</h2>
            <p>{props.website}</p>
            <button className="company-button">Company Site</button>
        </div>
        </div>

    )
}
export default JobTitleCard
