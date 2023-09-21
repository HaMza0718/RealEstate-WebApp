import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import "./index.css";

const App = () => {
  return (
    <div className="App">
      <div className="white-gradient" />
      <div>
        <Header />
        <Hero />
      </div>
    </div>
  );
};

export default App;
