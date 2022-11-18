import React from "react";

import NavbarComp from "./components/navbarComp";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavbarComp />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Navigate to="/home" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
