import React, { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import JobsList from "./components/JobsList/JobsList";

export const ThemeContext  = React.createContext();

function App() {

  const [dark, setDark] = useState(false);

  function changeMode() {
    setDark(!dark);
  }

  return (
    <div style={dark ? {backgroundColor: "var(--midnight)"} : {backgroundColor: "var(--light-gray)"}}className="App">
    <ThemeContext.Provider value={dark}>
    <Navbar changeMode={changeMode}/>
    <Searchbar />
    <JobsList />
    </ThemeContext.Provider>
    
    </div>
  );
}

export default App;
