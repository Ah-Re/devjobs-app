import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import JobsList from "./components/JobsList/JobsList";
import Modal from "./components/Modal/Modal";

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

  console.log(modal);

  function changeMode() {
    setDark(!dark);
  }

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
    <div style={dark ? {backgroundColor: "var(--midnight)"} : {backgroundColor: "var(--light-gray)"}} className="App">
    
    <ThemeContext.Provider value={dark}>
    <SearchContext.Provider value={filter}>
    <Navbar changeMode={changeMode}/>
    <Searchbar changeSearchTerm={changeSearchTerm}
                changeModal={changeModal}
    />
    {modal && <Modal changeModal={changeModal}/>}
    <JobsList />
    </SearchContext.Provider>
    </ThemeContext.Provider>
    
    </div>
  );
}

export default App;
