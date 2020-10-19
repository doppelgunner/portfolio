import React from "react";
import "./App.scss";
import HomePage from "./pages/HomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <HomePage />
      </div>
    );
  }
}

export default App;
