import { useState } from "react";
import "./App.css";
import Main from "./components/Main.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

  const [mode,setMode]=useState(false);

  function handleClick(){
    setMode(prevState=>!prevState)
  }
  return (
    <>
      <Navbar toggleDarkMode={handleClick} darkMode={mode}/>
      <Main darkMode={mode}/>
    </>
  );
}

export default App;
