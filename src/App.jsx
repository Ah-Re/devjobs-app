import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import JobsList from "./components/JobsList/JobsList";
import Modal from "./components/Modal/Modal";
import JobPage from "./components/JobPage/JobPage";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

export const ThemeContext = React.createContext();

function App() {
  const [dark, setDark] = useState(false);
  const [modal, setModal] = useState(false);

  function changeMode() {
    setDark(!dark);
  }

  // useEffect(() => {
  //   dark
  //     ? (document.getElementsByTagName("body")[0].style.backgroundColor =
  //         "var(--midnight)")
  //     : (document.getElementsByTagName("body")[0].style.backgroundColor =
  //         "var(--light-gray)");
  // });

  return (
    <Router>
      <div
        style={
          dark
            ? {
                backgroundColor: "var(--midnight)",
              }
            : {
                backgroundColor: "var(--light-gray)",
              }
        }
        className="App"
      >
        <ThemeContext.Provider value={dark}>
          <Routes>
            <Route
              path="/jobs/:company"
              element={<JobPage changeMode={changeMode} />}
            />
            <Route path="/" element={<Home changeMode={changeMode} />}></Route>
          </Routes>
        </ThemeContext.Provider>
      </div>
    </Router>
  );
}

export default App;
