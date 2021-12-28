import React, { useState, useContext } from 'react';
import { SearchContext } from '../../App';
import "./JobsList.css";
import JobData from "../../data.json";
import Job from "./Job/Job";



const JobsList = () => {

    
    const [visible, setVisible] = useState(6);
    const searchTerm = useContext(SearchContext);
    

    return (
        <div className="jobs-list">
           {JobData.filter((job) => {
                if (searchTerm.title !== "") {
                    return job.company.toLowerCase().includes(searchTerm.title) ||
                    job.position.toLowerCase().includes(searchTerm.title) || 
                    job.location.toLowerCase().includes(searchTerm.title);
                } else {
                    return job
                }
           }).slice(0, visible).map((job, index) => {
               return <Job key={index}
                   postedAt={job.postedAt}
                   contract={job.contract}
                   position={job.position}
                   company={job.company}
                   location={job.location}
                   logo={job.logo}
                   logoBackground={job.logoBackground}
               />
           }) }   
           <div className="button-container">
           <button onClick={() => {
               setVisible((prevValue) => 
                   prevValue + 6
               );
           }}>Load More</button>   
           </div>  
        </div>
    )
}

export default JobsList
