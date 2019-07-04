import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries
} from "../../node_modules/react-vis";

class FxCard extends Component {
  render() {
    const { closeData, highData, lowData } = this.props;
    return (
      <div className="FxCard">
        <XYPlot xType="time" height={2000} width={2000}>
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <LineSeries data={closeData} />
          <LineSeries data={highData} />
          <LineSeries data={lowData} />
        </XYPlot>
      </div>
    );
  }
}

export default FxCard;
