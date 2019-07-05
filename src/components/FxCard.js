import React, { Component, Fragment } from "react";
import {
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineSeries,
  ChartLabel
} from "../../node_modules/react-vis";

class FxCard extends Component {
  generateGraph = () => {
    const { closeData, highData, lowData } = this.props;

    return (
      <FlexibleWidthXYPlot xType="time" height={400}>
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
      </FlexibleWidthXYPlot>
    );
  };

  // chart range is determined by setting an initial year, then filtering for inputs that are greater than/equal to that year
  createRangeFilter = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const lastYear = currentYear - 1;
    const fiveYears = currentYear - 5;

    return (
      <Fragment>
        Chart range:
        <select name="range">
          <option value={currentYear}>This year</option>
          <option value={lastYear}>{lastYear}</option>
          <option value={fiveYears}>{fiveYears}</option>
          <option value="all-time">All available years</option>
        </select>
      </Fragment>
    );
  };

  render() {
    return (
      <div className="FxCard">
        {this.props.conversion}
        {this.generateGraph()}
        {this.createRangeFilter()}
      </div>
    );
  }
}

export default FxCard;
