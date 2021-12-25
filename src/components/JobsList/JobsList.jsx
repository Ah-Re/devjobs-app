import React, { useState } from 'react';
import "./JobsList.css";
import JobData from "../../data.json";
import Job from "./Job/Job";



const JobsList = () => {

    
    const [visible, setVisible] = useState(6);
    

    return (
        <div className="jobs-list">
           {JobData.slice(0, visible).map((job, index) => {
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
