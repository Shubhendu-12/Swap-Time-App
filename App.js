import React, { useState } from "react";

import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alerts from "./components/Alerts";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert(": Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(": Light mode enabled", "success");
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type1: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Swap Time"
          aboutText="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alerts alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
            
          {/* </Route>
          <Route path="/users">
            <Users /> */}
          <Route path="/" element={ <TextForm
                heading="Enter text below"
                mode={mode}
                showAlert={showAlert}
              />}/>
        
        </Routes>
      </Router>
    </>
  );
}

export default App;
