import React, { Component } from "react";
import FxCard from "../components/FxCard";

export default class FxContainer extends Component {
  createCards = () => {
    for (const [conversion, data] of Object.entries(this.props.chartData)) {
      return (
        <FxCard
          conversion={conversion}
          closeData={data.closeData}
          highData={data.highData}
          lowData={data.lowData}
        />
      );
    }
  };

  render() {
    return <div>{this.createCards()}</div>;
  }
}
