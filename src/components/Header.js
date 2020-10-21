import React from "react";

import HeaderLinks from "../components/HeaderLinks";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <span className="header__home">
          <span>Robert</span>
          <span className="alt-label">Guazon</span>
        </span>
        <HeaderLinks />
        <span className="header__social small-text">
          <a href="https://twitter.com/noobieprogrmmer" target="_blank">
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span className="sub-label">Twitter</span>
          </a>
          <a href="https://github.com/doppelgunner" target="_blank">
            <span>
              <i className="fab fa-github"></i>
            </span>
            <span className="sub-label">Github</span>
          </a>
          <a className="icon-button" href="mailto:doppelgunner@gmail.com">
            <span>
              <i className="far fa-envelope"></i>
            </span>
          </a>
        </span>
      </div>
    );
  }
}

export default Header;
