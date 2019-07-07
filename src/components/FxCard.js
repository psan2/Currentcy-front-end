import React, { Component } from "react";
import {
  XAxis,
  YAxis,
  FlexibleWidthXYPlot,
  HorizontalGridLines,
  LineSeries,
  ChartLabel
} from "../../node_modules/react-vis";
import { currentYear, oldestYear } from "../modules/DateFunctions";
// import DateButtonBar from "../containers/DateButtonBar";

class FxCard extends Component {
  filterChartData = () => {
    const {
      closeData,
      highData,
      lowData,
      rangeStart
    } = this.props.conversionObject;

    const filteredData = {
      closeData: closeData.filter(
        week => parseInt(week.x.getFullYear(), 10) >= rangeStart
      ),
      highData: highData.filter(
        week => parseInt(week.x.getFullYear(), 10) >= rangeStart
      ),
      lowData: lowData.filter(
        week => parseInt(week.x.getFullYear(), 10) >= rangeStart
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

  // chart range is determined by setting an initial year, then filtering for inputs that are greater than/equal to that year
  createRangeFilter = () => {
    return (
      <div>
        View exchange data starting from:
        <select
          name="range"
          onChange={event =>
            this.props.rangeFilter(
              parseInt(event.target.value, 10),
              this.props.conversionObject.conversion
            )
          }
        >
          <option value={currentYear()}>This year</option>
          <option value={currentYear() - 1}>Last year</option>
          <option value={currentYear() - 3}>{currentYear() - 3}</option>
          <option value={currentYear() - 5}>{currentYear() - 5}</option>
          <option value={oldestYear(this.props.conversionObject.closeData)}>
            All available years
          </option>
        </select>
      </div>
    );
  };

  // createButtonBar = () => {
  //   const dateRange = years(this.props.conversionObject.closeData);
  //   return <DateButtonBar dateRange={dateRange} />;
  // };

  render() {
    return (
      <div className="fx-card">
        {this.props.conversion}
        {this.generateGraph()}
        {this.createRangeFilter()}
      </div>
    );
  }
}

export default FxCard;
