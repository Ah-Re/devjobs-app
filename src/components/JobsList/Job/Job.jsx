import React, { useContext } from 'react';
import { ThemeContext } from "../../../App";
import "./Job.css";


const Job = (props) => {

    const dark = useContext(ThemeContext);

    return (
        <div style={{backgroundColor: dark ? "var(--very-dark-blue)" : "white" }}className="job">
            <img className="logo" style={{backgroundColor: props.logoBackground}} src={props.logo} />
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
