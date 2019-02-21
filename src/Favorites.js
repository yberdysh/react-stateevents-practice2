import React, { Component } from "react";
import BeyCard from './BeyCard'

export default class Favorites extends Component {
  render() {
    console.log("FAVORITES PROPS", this.props)
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.props.beys.map(bey => <BeyCard key={bey.id} bey={bey} toggleFavorite={this.props.toggleFavorite}/>)}
      </div>
    );
  }
}
