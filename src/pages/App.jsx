import React from "react";
import Navbar from "../component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
