import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="header__links small-text">
        <span>Services</span>
        <span>Works</span>
        <span>Notes</span>
        <span>Contacts</span>
      </span>
    );
  }
}

export default Header;
