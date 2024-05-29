import React, { useEffect } from "react";
import Navbar from "../component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";

const App = () => {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    console.log(code);
    sessionStorage.setItem("code", `${code}`);
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
