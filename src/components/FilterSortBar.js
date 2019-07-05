import React, { Component, Fragment } from "react";
import { currentYear } from "../modules/DateFunctions";

export default class FilterSortBar extends Component {
  state = {
    show: false
  };

  barVisible = () => {
    if (this.state.show) {
      return (
        <Fragment>
          Set all chart data from:
          <select
            name="range"
            onChange={event =>
              this.props.setGlobalRange(parseInt(event.target.value, 10))
            }
            value={this.props.globalRange}
          >
            <option value={currentYear()}>This year</option>
            <option value={currentYear() - 1}>Last year</option>
            <option value={currentYear() - 3}>{currentYear() - 3}</option>
            <option value={currentYear() - 5}>{currentYear() - 5}</option>
            <option value={0}>All available years</option>
          </select>
        </Fragment>
      );
    }
  };

  render() {
    return (
      <div className="filter-sort-bar">
        <div
          className="global-settings-btn"
          onClick={() => this.setState({ show: !this.state.show })}
        >
          {this.state.show ? "Hide global settings" : "Show global settings"}
        </div>
        {this.barVisible()}
      </div>
    );
  }
}
