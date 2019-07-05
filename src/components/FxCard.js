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
  state = {
    cardYearRange: 0
  };

  filterChartData = () => {
    const { closeData, highData, lowData } = this.props;

    const filteredData = {
      closeData: closeData.filter(
        week => parseInt(week.x.getFullYear(), 10) >= this.state.cardYearRange
      ),
      highData: highData.filter(
        week => parseInt(week.x.getFullYear(), 10) >= this.state.cardYearRange
      ),
      lowData: lowData.filter(
        week => parseInt(week.x.getFullYear(), 10) >= this.state.cardYearRange
      )
    };

    return filteredData;
  };

  generateGraph = () => {
    const { closeData, highData, lowData } = this.filterChartData();
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

  maxRangeYear = () => {
    const allYears = this.props.closeData.map(week =>
      parseInt(week.x.getFullYear(), 10)
    );
    return Math.min(...allYears);
  };

  // chart range is determined by setting an initial year, then filtering for inputs that are greater than/equal to that year
  createRangeFilter = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const lastYear = currentYear - 1;
    const threeYears = currentYear - 3;
    const fiveYears = currentYear - 5;

    return (
      <Fragment>
        View exchange data starting from:
        <select
          name="range"
          onChange={event =>
            this.setState({ cardYearRange: event.target.value })
          }
        >
          <option value={currentYear}>This year</option>
          <option value={lastYear}>Last year</option>
          <option value={threeYears}>{threeYears}</option>
          <option value={fiveYears}>{fiveYears}</option>
          <option value={this.maxRangeYear()}>All available years</option>
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
