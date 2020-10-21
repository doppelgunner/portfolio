import React from "react";
import classNames from "classnames";

import AppUtil from "../utils/AppUtil";

class Screen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, nth, screens, className } = this.props;

    return (
      <div
        id={AppUtil.getScreenIdByN(screens, nth)}
        className={classNames("screen", className)}
      >
        {children}
      </div>
    );
  }
}

export default Screen;
