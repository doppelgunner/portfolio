import React from "react";

import HeaderLinks from "../components/HeaderLinks";

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
          <span>
            <span>
              <i class="fab fa-twitter"></i>
            </span>
            <span className="sub-label">Twitter</span>
          </span>
          <span>
            <span>
              <i class="fab fa-github"></i>
            </span>
            <span className="sub-label">Github</span>
          </span>
          <span>Email</span>
        </span>
      </div>
    );
  }
}

export default Header;
