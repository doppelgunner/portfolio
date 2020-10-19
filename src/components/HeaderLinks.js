import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="header__links small-text">
        <Link to="/">Services</Link>
        <Link to="/works">Works</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/contacts">Contacts</Link>
        {/* <span>Services</span>
        <span>Works</span>
        <span>Notes</span>
        <span>Contacts</span> */}
      </span>
    );
  }
}

export default Header;
