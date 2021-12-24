import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import JobsList from "./components/JobsList/JobsList";


function App() {

  const [dark, setDark] = useState(false);

  function changeMode() {
    setDark(!dark);
  }

  return (
    <div style={dark ? {backgroundColor: "var(--midnight)"} : {backgroundColor: "var(--light-gray)"}}className="App">
    <Navbar dark={dark} changeMode={changeMode}/>
    <Searchbar />
    <JobsList />
    
    </div>
  );
}

export default App;
