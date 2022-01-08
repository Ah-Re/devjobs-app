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
  const [isSearching, setIsSearching] = useState(false);
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

  function changeIsSearching() {
    setIsSearching(true);
  }

  //   jobData.filter((job) => {
  //         if (location !== "" || filter !== "") {
  //           return (
  //             job.location.toLowerCase().includes(location) &&
  //             job.company.toLowerCase().includes(filter)
  //           );
  //         } else {
  //           return job;
  //         }
  //       })

  function changeJobData() {
    setJobData(() => {
      if (location !== "" || filter !== "") {
        return jobData.filter((job) => {
          return (
            job.location.toLowerCase().includes(location) &&
            job.company.toLowerCase().includes(filter)
          );
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
      />
      {modal && <Modal changeModal={changeModal} />}
      <JobsList filter={filter} location={location} jobData={jobData} />
    </div>
  );
};

export default Home;
