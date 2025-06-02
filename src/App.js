//import logo from './logo.svg';
import "./App.css";
// import About_us from "./Components/About_us";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";

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
      <Navbar title="Text Utility App" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm heading="Welcome to Text Utility App" mode={mode} showAlert={showAlert} />

      {/* <About_us /> */}
    </>
  );
}

export default App;
