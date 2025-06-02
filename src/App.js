//import logo from './logo.svg';
import "./App.css";
// import About_us from "./Components/About_us";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="Text Utility App" />
      <TextForm heading="Welcome to Text Utility App"/>

      {/* <About_us /> */}
    </>
  );
}

export default App;
