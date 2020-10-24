//designed by: Logan Cee (https://dribbble.com/shots/11276631-DS-Personal-Developer-Portfolio)
//coded by: noobieprogrammer (John Robert Guazon)

import React from "react";

import Screen from "../components/Screen";
import Header from "../components/Header";
import Tooltip from "rc-tooltip";
import NavDots from "../components/NavDots";
import Card from "../components/Card";

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
            <div>
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
            </div>
            <div className="profile__picture">
              <img src={"r-profile-background.png"} />
            </div>
          </div>
        </Screen>
        <Screen screens={this.state.screens} nth={2} className="screen--about">
          <div>
            <div className="bio--content">
              <div className="skillset">
                <Card
                  title="Back-end"
                  info="Add business logic to your app with real data"
                  icon={<i className="fas fa-database"></i>}
                  footer={<a className="page-link">5 projects</a>}
                />
                <Card
                  title="Front-end"
                  info="Add unique, beautiful and interactive visual elements to your app"
                  footer={<a className="page-link">5 projects</a>}
                  icon={<i className="fas fa-code"></i>}
                />
                <Card
                  title="Web Scraping"
                  info={`I'll scrape huge data for you and your business and store it in a database or export it in a csv file`}
                  footer={<a className="page-link">1 project</a>}
                  icon={<i className="fas fa-spider"></i>}
                />
              </div>
              <div className="introduce">
                <div className="introduce__label sub-label">Introduce</div>
                <div className="introduce__greetings">
                  Hello! I'm Robert Guazon
                </div>
                <div className="introduce__motto">
                  "Every great app started as an idea"
                </div>
                <div className="introduce__story sub-label">
                  Since the beginning of my journey as a full-stack web
                  developer 3 years ago, I've done and written apps. Most of my
                  projects before I started working were mostly personal
                  projects. Because of that I was familiar with almost all the
                  famous programming languages and it helped me in my job. As of
                  now I've done numerous projects which I can be proud of. I
                  think of jobs as a learning step in order to enhance my
                  skills.
                </div>
              </div>
            </div>
            <div className="bio--footer">
              <img className="bio--footer_company-logo" src={"sxi-logo.svg"} />
              <img className="bio--footer_company-logo" src={"rt-logo.png"} />
            </div>
          </div>
        </Screen>
      </div>
    );
  }
}

export default HomePage;
