import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import images from "./beyImages";
import Favorites from "./Favorites";
import BeyContainer from "./BeyContainer";

class App extends Component {
  state = {
    beyImages: images
  };

  favorites = () => {
    return this.state.beyImages.filter(bey => bey.favorite);
  };

  clickHandler = beyObj => {
    console.log("clicked");
    let newArr = [...this.state.beyImages];
    let bey = newArr.find(bey => bey.id === beyObj.id);
    bey.favorite = !bey.favorite;
    this.setState({
      beyImages: newArr
    });
  };

  render() {
    console.log(this.state.beyImages);
    return (
      <div className="container">
        <BeyContainer
          beyImages={this.state.beyImages}
          clickHandler={this.clickHandler}
        />
        <Favorites
          beyImages={this.favorites()}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default App;
