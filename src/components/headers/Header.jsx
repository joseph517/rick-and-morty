import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export const Header = (props) => {
  console.log(props.modoDark);
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg  ${props.modoDark ? "Dark" : ""}`}
      >
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex">
            <Link className="navbar-brand" to="/">
              Rick and Morty
            </Link>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className=" d-flex 
           navbar-nav me-auto mb-2 mb-lg-0"
              >
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div id="navbarSupportedContent">
            <ul
              className=" d-flex 
           navbar-nav me-auto mb-2 mb-lg-0"
            >
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/personajes"
                >
                  Personajes
                </Link>
              </li>

              <button onClick={props.dark} className="nav-item nav-link active">
                {props.modoDark ? "Modo Lite" : "Modo Dark"}
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
