import React from "react";

class Screen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="screen">{this.props.children}</div>;
  }
}

export default Screen;
