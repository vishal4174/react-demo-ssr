import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";

export const Register = () => {
  let navigate = useNavigate();

  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [flag, setFlag] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Name || !email || !password || !confirmPassword) {
      setFlag(true);
    } else {
      var formData = new URLSearchParams();
      formData.append("name", Name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("cPassword", confirmPassword);

      sessionStorage.setItem("email", JSON.stringify(email));
      sessionStorage.setItem("password", JSON.stringify(password));
      setFlag(false);
      navigate("/login");
    }
  };

  useEffect(() => {
    const items = sessionStorage.getItem("data");
    console.log(items);
  }, []);

  return (
    <section
      className="vh-100 bg-image"
      style={{
        backgroundImage:
          'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        value={Name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example1cg">
                        Your Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example3cg">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4cg">
                        Password
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        name="cPassword"
                        value={confirmPassword}
                        onChange={(e) => setconfirmPassword(e.target.value)}
                      />
                      <label className="form-label" htmlFor="form3Example4cdg">
                        Confirm password
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginBottom: "4px", padding: "15px" }}
                        onClick={handleSubmit}
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?
                      <a href="/login" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>

                    {flag && (
                      <Alert color="primary" variant="danger">
                        I got it you are in hurry! But every Field is important!
                      </Alert>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
