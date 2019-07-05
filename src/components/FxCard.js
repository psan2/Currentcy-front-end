import React, { Component } from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  LineSeries,
  ChartLabel
} from "../../node_modules/react-vis";

class FxCard extends Component {
  render() {
    const { closeData, highData, lowData, conversion } = this.props;
    return (
      <div className="FxCard">
        {conversion}
        <XYPlot xType="time" height={500} width={500}>
          <HorizontalGridLines />
          <XAxis />
          <YAxis />
          <ChartLabel
            text="Date"
            className="alt-x-label"
            includeMargin={false}
            xPercent={0.9}
            yPercent={1.01}
          />

          <ChartLabel
            text="Trading Price"
            className="alt-y-label"
            includeMargin={false}
            xPercent={-0.07}
            yPercent={0.06}
            style={{
              transform: "rotate(-90)",
              textAnchor: "end"
            }}
          />
          <LineSeries data={closeData} />
          <LineSeries data={highData} />
          <LineSeries data={lowData} />
        </XYPlot>
      </div>
    );
  }
}

export default FxCard;
