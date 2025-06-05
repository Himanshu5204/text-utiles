//import logo from './logo.svg';
import "./App.css";
import AboutUs from "./Components/AboutUs";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
//import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(125 172 210)";
      showAlert("Dark mode has been enabled", "success");
      document.title = "Text Utility App - Dark Mode";
      // setInterval(() => {
      //   document.title = "Text Utility App is Amazing!";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install Text Utility App Now!";
      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "Text Utility App - Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Text Utility App" mode={mode} aboutText="About-us" toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<AboutUs text="About TextUtils" />} />
          <Route
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
        </Routes>

        {/* <Route path="/" exact> */}
        {/* The exact prop is used to match the exact path */}
      </Router>
      <div className="container my-3"></div>
      {/* Uncomment the line below to include the About Us component */}
      {/* <About_us /> */}
    </>
  );
}

export default App;
