import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top border-bottom border-dark-subtle">
        <div className="container">
          <Link className="navbar-brand text-white" to="/">
            <h2 className="fs-4">
              <span>
                <img
                  src="/logo.png"
                  alt=""
                  style={{ width: "25px", marginRight: "10px" }}
                />
              </span>
              Abhra Patra
            </h2>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-2">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>

              <li className="nav-item px-2">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item px-2">
                <a className="nav-link" href="#techstack">
                  Tech Stack
                </a>
              </li>

              <li className="nav-item px-2">
                <a className="nav-link" href="#connect">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
