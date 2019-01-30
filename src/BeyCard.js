import React, { Component } from "react";

class BeyCard extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{/*Bey name goes here*/}</h3>
        {/*image tag goes here*/}
      </div>
    );
  }
}

export default BeyCard;
