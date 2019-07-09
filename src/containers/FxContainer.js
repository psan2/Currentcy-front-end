import React, { Component } from "react";
import API_KEY from "../config";
import FxCard from "../components/FxCard";
import RightNav from "../containers/RightNav";

export default class FxContainer extends Component {
  state = { chartData: [] };

  // ALPHAVANTAGE - using TEST_URL instead of live API link to limit API calls due to rate-limiting
  // TEST_URL = "http://localhost:3000/";
  BASE_URL = `https://www.alphavantage.co/`;
  WEEKLY_QUERY = `query?function=FX_WEEKLY&`;

  componentDidMount = () => {
    // this.getCurrentFxWeekly("EUR", "USD");
    // this.getCurrentFxWeekly("USD", "GBP");
    // this.getCurrentFxWeekly("GBP", "EUR");
  };

  getCurrentFxWeekly = (fromCurrency, toCurrency) => {
    fetch(
      this.BASE_URL +
        this.WEEKLY_QUERY +
        `from_symbol=${fromCurrency}&to_symbol=${toCurrency}&apikey=${API_KEY}`
    )
      // fetch(this.TEST_URL + `from_symbol=${fromCurrency}&to_symbol=${toCurrency}`)
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
      chartData: [
        ...this.state.chartData,
        {
          rangeStart: 0,
          conversion: `${fromCurrency}_to_${toCurrency}`,
          closeData: closeData,
          highData: highData,
          lowData: lowData
        }
      ]
    });
  };

  createCards = () => {
    return this.state.chartData.map((conversionObject, index) => {
      return (
        <FxCard
          key={index}
          conversionObject={conversionObject}
          rangeFilter={this.rangeFilter}
        />
      );
    });
  };

  rangeFilter = (year, targetConversion) => {
    let newCharts = {};
    if (!targetConversion) {
      newCharts = this.state.chartData.map(conversionCard => {
        conversionCard.rangeStart = year;
        return conversionCard;
      });
    } else {
      newCharts = this.state.chartData.map(conversionCard => {
        if (conversionCard.conversion === targetConversion) {
          conversionCard.rangeStart = year;
          return conversionCard;
        } else {
          return conversionCard;
        }
      });
    }

    this.setState({
      chartData: newCharts
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="fx-container">
          {this.createCards()}
          <FxCard key="new" newTracker={this.getCurrentFxWeekly} />
        </div>
        <RightNav />
      </React.Fragment>
    );
  }
}
