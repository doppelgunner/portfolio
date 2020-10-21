import React from "react";

import _ from "lodash";
import { NavLink } from "react-router-dom";

import DOMUtil from "../utils/DOMUtil";

class NavDots extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screens: props.screens,
    };
  }

  static defaultProps = {
    screens: [],
  };

  calculateIfShowingOnScreen = () => {
    const newScreens = this.state.screens.slice();
    _.each(newScreens, (screen) => {
      screen.isInViewPort = DOMUtil.elementInViewport(
        document.getElementById(screen.id),
        this.home
      );
    });

    this.setState({
      newScreens,
    });
  };

  componentDidMount() {
    this.calculateIfShowingOnScreen();

    this.home = document.getElementById("home");
    this.func = _.debounce(this.calculateIfShowingOnScreen, 300);

    this.home.addEventListener("scroll", this.func);
  }

  componentWillUnmount() {
    this.home.removeEventListener("scroll", this.func);
  }

  render() {
    const { screens } = this.state;

    if (!screens && screens.length == 0) {
      return null;
    }

    return (
      <div className="nav-dots">
        {_.map(screens, (screen) => {
          return <a className={screen.isInViewPort ? "active" : null}></a>;
        })}
      </div>
    );
  }
}

export default NavDots;
