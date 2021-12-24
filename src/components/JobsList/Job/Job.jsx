import React from 'react';
import "./Job.css";


const Job = (props) => {

    
    return (
        <div className="job">
            <img style={{backgroundColor: 'black'}} src={props.logo} />
                {props.postedAt}
                {props.contract}
                {props.position}
                {props.company}
                {props.location}
                {props.logo}
                {props.logoBackground}
        </div>
    )
}

export default Job
