import React, { Component } from "react";

export default class FilterSortBar extends Component {
  state = {
    show: false
  };

  barVisible = () => {
    if (this.state.show) {
      return "FILTER BAR AND STUFF";
    }
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Show global settings
        </button>
        {this.barVisible()}
      </div>
    );
  }
}
