import React from "react";
import beyImages from "./beyImages";
import BeyCard from './BeyCard'

class BeyContainer extends React.Component {
  state = {
    beyImages: beyImages
  };

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {beyImages.map(bey => <BeyCard key={bey.id} bey={bey} />)}
      </div>
    );
  }
}

export default BeyContainer;
