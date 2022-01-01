import React from 'react';
import "./JobInfoCard.css";

const JobInfoCard = (props) => {
    return (
        <div className="job-info-card-wrapper">
        <div className="job-info-card">
            Here is some text.
            {props.postedAt}
            {props.contract}
            {props.position}
            {props.location}
            {props.description}
            Requirements:
            {props.requirementsContent}
            {props.requirementsItems.map(item => {
                return "item: " + item;
            })}
            Role: 
            {props.roleContent}
            {props.roleItems.map(item => {
                return "item: " + item;
            })}

        </div>
        </div>

    )
}

export default JobInfoCard
