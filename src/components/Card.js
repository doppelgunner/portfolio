import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, icon, info, footer } = this.props;

    return (
      <div className="card">
        <div className="card__header">
          <div className="card__header__title">{title}</div>
          <div className="card__header__icon">{icon}</div>
        </div>
        <div className="card__info sub-label">{info}</div>
        <div className="card__footer">{footer}</div>
      </div>
    );
  }
}

export default Card;
