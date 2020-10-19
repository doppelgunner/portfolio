import React from "react";

import Screen from "../components/Screen";
import Header from "../components/Header";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Screen>
          <Header />
          <div className="profile">
            <div className="profile__info">
              <div className="profile__position tag">Full-Stack Developer</div>
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
                <span className="big-text">3</span>
                <span className="small-text sub-label upper-case">
                  projects completed on 2 countries
                </span>
              </span>
            </div>
            <div className="profile__picture">
              <img src={"r-profile-background.png"} />
            </div>
          </div>
        </Screen>
      </div>
    );
  }
}

export default HomePage;
