import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
import Modal from "../Modal/Modal";
import JobsList from '../JobsList/JobsList';

const Home = (props) => {

    const [modal, setModal] = useState(false);
    const [filter, setFilter] = useState({
        title: "",
        location: "",
        fullTime: ""
      });

    // function changeMode() {
    //     setDark(!dark);
    //   }

    
      function changeModal() {
        setModal(!modal);
      }

      function changeSearchTerm(term) {
        setFilter(prevValue => {
          return {title: term,
          location: prevValue.location,
          fullTime: prevValue.fullTime}
        });
      }

      

    return (
        <div>
            <Navbar changeMode={props.changeMode}/>
    <Searchbar changeSearchTerm={changeSearchTerm}
                changeModal={changeModal}
    />
    {modal && <Modal changeModal={changeModal}/>}
    <JobsList />
        </div>
    )
}

export default Home
