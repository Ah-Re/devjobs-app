import { useState } from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";


function App() {

  const [dark, setDark] = useState(false);

  function changeMode() {
    setDark(!dark);
  }

  return (
    <div className="App">
    <Navbar dark={dark} changeMode={changeMode}/>
    </div>
  );
}

export default App;
