import React from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Main />
      </div>
      <div className="fixed-action-btn">
        <NavLink to="/meetups/add" className="btn-floating btn-large red">
          <i className="fa fa-plus"> </i>
        </NavLink>
      </div>
    </div>
  );
}

export default App;
