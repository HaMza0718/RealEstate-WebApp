import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import "./index.css";
import Value from "./components/Value";
import Logo from "./components/Logo";

const App = () => {
  return (
    <>
    <div className="App">
      <div className="white-gradient" />
      <div>
        <Header />
        <Hero />
      </div>
    </div>
    <Logo/>
    <Slider/>
    <Value/>
    </>
  );
};

export default App;
