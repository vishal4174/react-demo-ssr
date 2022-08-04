import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import '../App.css'

const Login = () => {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    var formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("password", password);
    let pass = sessionStorage.getItem("password").replace(/"/g, "");
    let mail = sessionStorage.getItem("email").replace(/"/g, "");
    if (!email || !password) {
      setFlag(true);
    } else if (password !== pass || email !== mail) {
      setFlag(true);
    } else {
      setFlag(false);
      navigate("/table");
    }
  };

  return (
    <div className="login-page">
      <form className="form-login">
        <div className="form-outline mb-4">
          <input
            type="email"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          style={{marginBottom:"4px"}}
          onClick={handleSubmit}
        >
          Sign in
        </button>
        <p className="text-center ">
          Back to Register
          <a href="/register" className="fw-bold text-body">
            <u>Register</u>
          </a>
        </p>

        {flag && (
          <Alert color="primary" variant="warning">
            Fill correct Info else keep trying.
          </Alert>
        )}
      </form>
    </div>
  );
};

export default Login;
