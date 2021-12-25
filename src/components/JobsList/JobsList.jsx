import React from 'react';
import "./JobsList.css";
import JobData from "../../data.json";
import Job from "./Job/Job";



const JobsList = () => {

    

    

    return (
        <div className="jobs-list">
           {JobData.slice(0,8).map((job, index) => {
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
           <button>Load More</button>   
           </div>  
        </div>
    )
}

export default JobsList
