import React from 'react';
import "./JobsList.css";
import JobData from "../../data.json";
import Job from "./Job/Job";



const JobsList = () => {

    

    

    return (
        <div className="jobs-list">
           {JobData.map((job, index) => {
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
           <button>Load More</button>     
        </div>
    )
}

export default JobsList
