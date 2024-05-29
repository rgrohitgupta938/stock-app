import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      sessionStorage.setItem("authCode", code);
    }
  }, []);
  return (
    <div className="container">
      <h1>CI/Cd are active</h1>
    </div>
  );
};

export default Home;
