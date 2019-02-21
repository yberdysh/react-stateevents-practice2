import React, { Component } from "react";

class BeyCard extends React.Component {
  render() {
    let {name, img} = this.props.bey
    return (
      <div>
        <h3>{name}</h3>
        <img src={img}/>
      </div>
    );
  }
}

export default BeyCard;
