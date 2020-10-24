import React from "react";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const appHeight = () => {
      document.documentElement.style.setProperty(
        "--app-height",
        `${window.innerHeight}px`
      );
    };
    window.addEventListener("resize", appHeight);
    appHeight();
  }

  render() {
    return (
      <div className="app">
        <Router basename="/portfolio">
          <Switch>
            <Route path="/contacts">
              <HomePage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
