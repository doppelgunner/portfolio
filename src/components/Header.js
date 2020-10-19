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
          <Link className="alt-label">Guazon</Link>
        </span>
        <HeaderLinks />
        <span className="header__social small-text">
          <Link>
            <span>
              <i className="fab fa-twitter"></i>
            </span>
            <span className="sub-label">Twitter</span>
          </Link>
          <Link>
            <span>
              <i className="fab fa-github"></i>
            </span>
            <span className="sub-label">Github</span>
          </Link>
          <span>Email</span>
        </span>
      </div>
    );
  }
}

export default Header;
