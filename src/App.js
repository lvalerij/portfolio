import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import About from "./About.js";
import Contact from "./Contact.js";
import styles from "./Css/App.module.css";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className={`container-fluid ${styles.fullHeight}`}>
          <div className="row">
            <div
              className={`col-3 col-md-2 d-flex flex-column align-items-center min-vh-100 px-3 pt-3 ${styles.leftSidebar}`}
            >
              <div className={styles.profileImage}>
                <img className="img-fluid" src="static/img/me.png" alt="" />
              </div>
              <div>
                <div className={styles.profileName}>
                  <h5 className="text-center font-weight-bold">
                    Valerij Lutkow
                  </h5>
                </div>
                <div
                  className={`d-flex flex-row justify-content-around ${styles.socialLinks}`}
                >
                  <a href="https://www.linkedin.com/in/valerij-lutkow/">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href="https://www.xing.com/profile/Valerij_Lutkow">
                    <i className="fab fa-xing" />
                  </a>
                  <a href="https://github.com/lvalerij">
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
              <div className={`mt-4 ${styles.menuItems}`}>
                <ul className="nav d-flex flex-column">
                  <li className="nav-item">
                    <NavLink
                      to="/"
                      exact={true}
                      activeClassName={styles.selected}
                      className="nav-link"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/portfolio"
                      activeClassName={styles.selected}
                      className="nav-link"
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      to="/contact"
                      activeClassName={styles.selected}
                      className="nav-link"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`col-9 col-md-7 min-vh-100 ${styles.rightSection}`}>
              <div
                className={`ml-2 mr-2 mt-4 ml-md-5 mt-md-5 ${styles.rightSectionInside}`}
              >
                <Switch>
                  <Route path="/" exact component={About} />
                  <Route path="/contact" component={Contact} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
