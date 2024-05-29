import React from "react";

const Login = () => {
  const key = "4c02abe3-079b-4beb-b915-247be4ab2fd9";
  const url = encodeURIComponent("https://rgstock.web.app/");

  const handleLogin = () => {
    const authorizationUrl = `https://api.upstox.com/v2/login/authorization/dialog?response_type=code&client_id=${key}&redirect_uri=${url}`;
    window.location.href = authorizationUrl;
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Upstox</button>
    </div>
  );
};

export default Login;
