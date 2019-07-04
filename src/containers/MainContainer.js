import React, { Component } from "react";
import FxContainer from "../containers/FxContainer";

export default class MainContainer extends Component {
  URL = "http://localhost:3000/stockinfo";

  state = { chartData: [] };

  componentDidMount = () => {
    this.getCurrentFxWeekly();
  };

  getCurrentFxWeekly = () => {
    fetch(this.URL)
      .then(resp => resp.json())
      .then(this.parseChartData);
  };

  //parseChartData takes as argument JSON data from Alphavantage's weekly FX history (https://www.alphavantage.co/query?function=FX_WEEKLY&from_symbol=EUR&to_symbol=USD&apikey=demo)
  //then parses data into a series of objects:
  //1) a master object, named like 'EUR_to_USD' (depending on the currencies),
  //2) three child arrays, closeData, highData, and lowData, which contain info on the high, low, and closing prices for that week
  //3) a number of 2-element objects, which are composed of the week (as a string), and the price
  //e.g., an expected output would be: {
  //   EUR_to_USD: {
  //     closeData: [
  //       {x: "2019-07-03", y: 29.71},
  //       {...}
  //     ]
  //   }
  // }
  // these outputs are then saved to the "weekly" key of state
  parseChartData = data => {
    const fromCurrency = data["Meta Data"]["2. From Symbol"];
    const toCurrency = data["Meta Data"]["3. To Symbol"];
    const weeks = data["Time Series FX (Weekly)"];

    const closeData = [];
    const highData = [];
    const lowData = [];

    for (const [week, prices] of Object.entries(weeks)) {
      closeData.push({
        x: new Date(week + "z"),
        y: parseFloat(prices["4. close"], 10)
      });
      highData.push({
        x: new Date(week + "z"),
        y: parseFloat(prices["2. high"], 10)
      });
      lowData.push({
        x: new Date(week + "z"),
        y: parseFloat(prices["3. low"], 10)
      });
    }
    this.setState({
      chartData: {
        [`${fromCurrency}_to_${toCurrency}`]: {
          closeData: closeData,
          highData: highData,
          lowData: lowData
        }
      }
    });
  };

  render() {
    return (
      <div>
        <FxContainer chartData={this.state.chartData} />
      </div>
    );
  }
}
