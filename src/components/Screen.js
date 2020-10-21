import React from "react";

import AppUtil from "../utils/AppUtil";

class Screen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { children, nth, screens } = this.props;

    return (
      <div id={AppUtil.getScreenIdByN(screens, nth)} className="screen">
        {children}
      </div>
    );
  }
}

export default Screen;
