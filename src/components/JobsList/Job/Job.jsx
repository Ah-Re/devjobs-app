import React, { useContext } from 'react';
import { ThemeContext } from "../../../App";
import "./Job.css";


const Job = (props) => {

    const dark = useContext(ThemeContext);
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
