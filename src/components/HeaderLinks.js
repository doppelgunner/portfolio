import React from "react";
import { NavLink } from "react-router-dom";
import _ from "lodash";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    links: [
      {
        link: "/",
        name: "Services",
        icon: <i className="fas fa-user-cog"></i>,
      },
      {
        link: "/works",
        name: "Works",
        icon: <i className="fas fa-folder-open"></i>,
      },
      {
        link: "/notes",
        name: "Notes",
        icon: <i className="fas fa-sticky-note"></i>,
      },
      {
        link: "/contacts",
        name: "Contacts",
        icon: <i className="fas fa-address-book"></i>,
      },
    ],
  };

  render() {
    return (
      <span className="header__links small-text">
        {_.map(this.props.links, (link) => {
          return (
            <NavLink
              key={link.link}
              exact
              to={link.link}
              activeClassName="active"
            >
              <span className="arrows">{"<"}</span>
              {link.icon}
              {link.name}
              <span className="arrows">{">"}</span>
            </NavLink>
          );
        })}
        {/* <Link to="/">Services</Link>
        <Link to="/works">Works</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/contacts">Contacts</Link> */}
        {/* <span>Services</span>
        <span>Works</span>
        <span>Notes</span>
        <span>Contacts</span> */}
      </span>
    );
  }
}

export default Header;
