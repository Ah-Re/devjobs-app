import React from 'react';
import "./JobTitleCard.css";


const JobTitleCard = (props) => {
    
    
    return (
        <div className="job-title-card">
            <img src={props.logo} alt="logo" />
            <h2>{props.company}</h2>
            <p>{props.website}</p>
            <button>Company Site</button>
        </div>
    )
}
export default JobTitleCard
