import React, { Component } from "react";
import RightNav from "../containers/RightNav";
import FxContainer from "../containers/FxContainer";

export default class MainContainer extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="main-container">
          <FxContainer />
        </div>
        <RightNav />
      </React.Fragment>
    );
  }
}
