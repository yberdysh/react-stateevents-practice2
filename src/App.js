import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import BeyContainer from "./BeyContainer";
import Favorites from "./Favorites";
import beyImages from "./beyImages";

class App extends Component {
  state = {
    beyImages: beyImages
  };

  favoriteHandler = beyObj => {
    let newBeyArray = [...this.state.beyImages];
    let bey = newBeyArray.find(bey => bey.id === beyObj.id);
    bey.favorite = !bey.favorite;
    this.setState({
      beyImages: newBeyArray
    });
  };

  addToFavorites = () => {
    return this.state.beyImages.filter(bey => bey.favorite);
  };

  render() {
    return (
      <div className="container">
        <BeyContainer
          beyImages={this.state.beyImages}
          clickHandler={this.favoriteHandler}
        />
        <Favorites
          beyImages={this.addToFavorites()}
          clickHandler={this.favoriteHandler}
        />
      </div>
    );
  }
}

export default App;
