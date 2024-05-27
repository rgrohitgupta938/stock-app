import React, { useEffect } from "react";
import auth from "../services/authservices";

const Navbar = () => {
  const user = auth.getUser();
  console.log(user);
  const key = "4c02abe3-079b-4beb-b915-247be4ab2fd9";
  const url = encodeURIComponent("http://localhost:5173/");

  const handleLogin = () => {
    const authorizationUrl = `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${key}&redirect_uri=${url}`;
    window.location.href = authorizationUrl;
  };
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    console.log(code);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary ps-5 pe-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My Stock App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                F&O
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Account
              </a>
            </li>
            {user !== null ? (
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Logout
                </a>
              </li>
            ) : (
              <li className="nav-item">
                <a className="nav-link" href="#" onClick={handleLogin}>
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
