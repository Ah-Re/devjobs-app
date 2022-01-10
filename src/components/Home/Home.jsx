import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import Modal from "../Modal/Modal";
import JobsList from "../JobsList/JobsList";
import JobDataFile from "../../data.json";

const Home = (props) => {
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [location, setLocation] = useState("");
  const [fullTime, setFullTime] = useState(false);
  const [jobData, setJobData] = useState(JobDataFile);

  function changeModal() {
    setModal(!modal);
  }

  function changeSearchTerm(term) {
    setFilter(term);
  }

  function changeLocationTerm(term) {
    setLocation(term);
  }

  function changeFullTime() {
    setFullTime(!fullTime);
  }

  function changeJobData() {
    setJobData(() => {
      if (location !== "" || filter !== "" || fullTime) {
        return jobData.filter((job) => {
          if (fullTime) {
            return (
              (job.company.toLowerCase().includes(filter) ||
                job.position.toLowerCase().includes(filter)) &&
              job.location.toLowerCase().includes(location) &&
              job.contract === "Full Time"
            );
          } else {
            return (
              (job.company.toLowerCase().includes(filter) ||
                job.position.toLowerCase().includes(filter)) &&
              job.location.toLowerCase().includes(location)
            );
          }
        });
      } else {
        return JobDataFile;
      }
    });
  }

  return (
    <div>
      <Navbar changeMode={props.changeMode} />
      <Searchbar
        changeSearchTerm={changeSearchTerm}
        changeModal={changeModal}
        changeLocationTerm={changeLocationTerm}
        changeFullTime={changeFullTime}
        changeJobData={changeJobData}
        fullTime={fullTime}
      />
      {modal && (
        <Modal
          changeModal={changeModal}
          changeFullTime={changeFullTime}
          changeLocationTerm={changeLocationTerm}
          changeJobData={changeJobData}
          fullTime={fullTime}
        />
      )}
      <JobsList filter={filter} location={location} jobData={jobData} />
    </div>
  );
};

export default Home;
