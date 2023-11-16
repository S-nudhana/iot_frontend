import React from "react";
import { Navbar, Pm, Table } from "./components";
import { Footer } from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <Pm />
      <Table />
      <Footer />
    </div>
  );
};

export default App;