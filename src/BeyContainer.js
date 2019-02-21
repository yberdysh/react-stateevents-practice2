import React from "react";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {

  render() {
    // console.log("PROPS IN BEY CONTAINER", this.props)
    let beyonces = this.props.beys ? this.props.beys : this.props.faveBeys
    return (
        <div className={this.props.faveBeys ? "favorites" :"index"}>
        {this.props.faveBeys ? <h1>Favorites</h1> : <h1>Index</h1>}
        {beyonces.map(bey => <BeyCard key={bey.id} bey={bey} toggleFavorite={this.props.toggleFavorite}/>)}
      </div>
    );
  }
}

export default BeyContainer;
