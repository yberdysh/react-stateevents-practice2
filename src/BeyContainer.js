import React from "react";
import beyImages from "./beyImages";

class BeyContainer extends React.Component {
  state = {
    beyImages: beyImages
  };
  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {/*list of beys*/}
      </div>
    );
  }
}

export default BeyContainer;
