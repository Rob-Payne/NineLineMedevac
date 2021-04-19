import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/home">
            REDLINE MEDEVAC
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  NINE LINE
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/DispatchView" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/DispatchView">
                  DISPATCHER
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/Responder" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/Responder">
                  RESPONDER
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);