import React from "react";
import "./App.css";
import NASAInfo from "./components/NASAInfo";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <p>
        <h1>
          <Header />
        </h1>
      </p>
      <p>
        <NASAInfo />
      </p>
    </div>
  );
}

export default App;
