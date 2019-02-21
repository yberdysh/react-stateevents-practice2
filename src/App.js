import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from './BeyContainer'
import Favorites from './Favorites'
import beyImages from './beyImages'

class App extends Component {
  state = {
      beys: beyImages,
      faves: []
  };

  toggleFavorite = (id) => {
    let foundBey = this.state.beys.find(bey => bey.id === id)
    foundBey.favorite = !foundBey.favorite;
    let faves = this.state.beys.filter(bey => bey.favorite === true)
    this.setState({faves})
  }

  render() {
    console.log("STATE", this.state)
    return (
      <div className="container">
        <BeyContainer beys={this.state.beys} toggleFavorite={this.toggleFavorite}/>
        <BeyContainer faveBeys={this.state.faves} toggleFavorite={this.toggleFavorite}/>
        {/*<Favorites beys={this.state.faves} toggleFavorite={this.toggleFavorite}/>*/}
      </div>
    );
  }
}

export default App;
