import React from "react";
import BeyCard from "./BeyCard";

class BeyContainer extends React.Component {
  beys = () => {
    return this.props.beyImages.map(bey => (
      <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler} />
    ));
  };
  render() {
    // let beys = this.state.beyImages.map(bey => (
    //   <BeyCard key={bey.id} bey={bey} clickHandler={this.props.clickHandler} />
    // ));
    return (
      <div className="index">
        <h1>Index</h1>
        {this.beys()}
      </div>
    );
  }
}

export default BeyContainer;
