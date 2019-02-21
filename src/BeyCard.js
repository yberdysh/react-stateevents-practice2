import React, { Component } from "react";

class BeyCard extends React.Component {
  render() {
  console.log("PROPS IN BEYCARD", this.props)
    let {name, img, id} = this.props.bey
    return (
      <div onClick={() => this.props.toggleFavorite(id)}>
        <h3>{name}</h3>
        <img src={img}/>
      </div>
    );
  }
}

export default BeyCard;
