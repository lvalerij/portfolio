import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./styles.css";
import About from "./About.js";

export default function App() {
  return (
    <div className="App">
      <div className="container-fluid fullHeight">
        <div className="row">
          <div className="col-3 col-md-2 d-flex flex-column align-items-center min-vh-100 px-3 pt-3 leftSidebar">
            <div className="profileImage">
              <img className="img-fluid" src="static/img/me.png" alt="" />
            </div>
            <div>
              <div className="profileName">
                <h5 className="text-center font-weight-bold">Valerij Lutkow</h5>
              </div>
              <div className="d-flex flex-row justify-content-around socialLinks">
                <a>
                  <i className="fab fa-linkedin-in" />
                </a>
                <a>
                  <i className="fab fa-xing" />
                </a>
                <a>
                  <i className="fab fa-github" />
                </a>
              </div>
            </div>
            <div className="menuItems mt-4">
              <ul className="nav d-flex flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9 col-md-7 min-vh-100 rightSection">
            <div className="ml-2 mr-2 mt-4 ml-md-5 mt-md-5 rightSectionInside">
              <About />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
