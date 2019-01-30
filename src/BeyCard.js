import React, { Component } from "react";

class BeyCard extends React.Component {
  namedFunc = () => {
    this.props.clickHandler(this.props.bey);
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.bey.name}</h3>
        <img alt="" src={this.props.bey.img} onClick={this.namedFunc} />
      </div>
    );
  }
}

export default BeyCard;
