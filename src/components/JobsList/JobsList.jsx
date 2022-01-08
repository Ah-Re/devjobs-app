import React, { useState, useContext } from "react";
import "./JobsList.css";
import JobData from "../../data.json";
import Job from "./Job/Job";

const JobsList = (props) => {
  const [visible, setVisible] = useState(6);

  return (
    <div className="jobs-list">
      <div className="job-wrapper">
        {props.jobData.slice(0, visible).map((job, index) => {
          return (
            <Job
              key={index}
              postedAt={job.postedAt}
              contract={job.contract}
              position={job.position}
              company={job.company}
              location={job.location}
              logo={job.logo}
              logoBackground={job.logoBackground}
              description={job.description}
              requirements={job.requirements}
              role={job.role}
              website={job.website}
            />
          );
        })}
      </div>
      <div className="button-container">
        <button
          onClick={() => {
            setVisible((prevValue) => prevValue + 6);
          }}
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default JobsList;

// .filter((job) => {
//           {
//             if (props.isSearching) {
//               return (
//                 job.location.toLowerCase().includes(props.location) &&
//                 job.company.toLowerCase().includes(props.filter)
//               );
//               {
//                 /* job.company.toLowerCase().includes(props.filter) ||
//                 job.position.toLowerCase().includes(props.filter) || */
//               }
//             } else {
//               return job;
//             }
//           }
//         })
