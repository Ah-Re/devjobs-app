import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import JobsList from "./components/JobsList/JobsList";
import Modal from "./components/Modal/Modal";
import JobPage from "./components/JobPage/JobPage";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom';

export const ThemeContext  = React.createContext();
export const SearchContext = React.createContext();

function App() {

  const [dark, setDark] = useState(true);
  const [filter, setFilter] = useState({
    title: "",
    location: "",
    fullTime: ""
  });
  const [modal, setModal] = useState(false);

  

  function changeMode() {
    setDark(!dark);
  }

  // function changeModal() {
  //   setModal(!modal);
  // }
  

  // function changeSearchTerm(term) {
  //   setFilter(prevValue => {
  //     return {title: term,
  //     location: prevValue.location,
  //     fullTime: prevValue.fullTime}
  //   });
  // }
  
  return (
    <Router>
    <div style={dark ? {backgroundColor: "var(--midnight)"} : {backgroundColor: "var(--light-gray)"}} className="App">
    
    <ThemeContext.Provider value={dark}>
    <SearchContext.Provider value={filter}>
    {/* <Home changeMode={changeMode}/> */}
    {/* <Navbar changeMode={changeMode}/>
    <Searchbar changeSearchTerm={changeSearchTerm}
                changeModal={changeModal}
    />
    {modal && <Modal changeModal={changeModal}/>}
    <JobsList /> */}
    <Routes>
    <Route path="/job-page" element={<JobPage />}/>
    <Route path="/" element={<Home changeMode={changeMode}/>}>

    </Route>
    </Routes>
    </SearchContext.Provider>
    </ThemeContext.Provider>
    
    </div>
    </Router>
  );
}

export default App;
