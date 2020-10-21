//designed by: Logan Cee (https://dribbble.com/shots/11276631-DS-Personal-Developer-Portfolio)
//coded by: noobieprogrammer (John Robert Guazon)

import React from "react";

import Screen from "../components/Screen";
import Header from "../components/Header";
import Tooltip from "rc-tooltip";
import NavDots from "../components/NavDots";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      screens: [{ id: "screen-profile" }, { id: "screen-work" }],
    };
  }

  render() {
    return (
      <div className="page" id="home">
        <NavDots screens={this.state.screens} />
        <Screen screens={this.state.screens} nth={1}>
          <Header />
          <div className="profile">
            <div className="profile__info">
              <Tooltip
                trigger={["hover"]}
                placement="top"
                mouseLeaveDelay={0}
                overlay={
                  <span className="tag-container">
                    <span className="tag--blue">ReactJS</span>
                    <span className="tag--green">NodeJS</span>
                    <span className="tag--red">Java</span>
                    <span className="tag--yellow">Firebase</span>
                    <span className="tag--white">HTML</span>
                    <span className="tag--pink">CSS</span>
                    <span className="tag">Javascript</span>
                  </span>
                }
              >
                <div className="profile__position tag">
                  Full-Stack Developer
                </div>
              </Tooltip>
              <div className="profile__motto big-text">
                Talk is cheap. Show me the code
              </div>
              <div className="profile__saying sub-label small-text">
                I turn ideas into reality using the power of code and my mind,
                what else do you expect???
              </div>
              {/* <span className="profile__chat">Let's Chat</span>*/}
            </div>
            <div className="profile__experience">
              <span>
                <span className="big-text">3</span>
                <span className="small-text sub-label upper-case">
                  years experience
                </span>
              </span>
              <span>
                <span className="big-text">11</span>
                <span className="small-text sub-label upper-case">
                  projects completed on 3 countries
                </span>
              </span>
            </div>
            <div className="profile__picture">
              <img src={"r-profile-background.png"} />
            </div>
          </div>
        </Screen>
        <Screen screens={this.state.screens} nth={2}>
          hello
        </Screen>
      </div>
    );
  }
}

export default HomePage;
