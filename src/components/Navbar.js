import React from "react";
import "../App.css";

const Navbar = () => {
  const logout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="home-tbl">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active active"
                  style={{ textDecoration: "none" }}
                  href="/table"
                >
                  Table
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  href="/useID"
                >
                  UseID
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  href="/batching"
                >
                  Automatic Batching
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ textDecoration: "none" }}
                  href="/transition"
                >
                  UseTransition
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-success"
                type="submit"
                id="nav-btn"
                onClick={logout}
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
