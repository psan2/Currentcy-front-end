import React, { Component } from "react";
import API_KEY from "../config";
import FxCard from "../components/FxCard";
import RightNav from "../containers/RightNav";

export default class FxContainer extends Component {
  state = { chartData: [] };

  // ALPHAVANTAGE - using TEST_URL instead of live API link to limit API calls due to rate-limiting
  TEST_URL = "http://localhost:3000/";
  BASE_URL = `https://www.alphavantage.co/`;
  WEEKLY_QUERY = `query?function=FX_WEEKLY&`;

  componentDidMount = () => {
    this.getUserCurrencies(1);
  };

  getUserCurrencies = userId => {
    fetch(this.TEST_URL + `users/${userId}/trackers`)
      .then(resp => resp.json())
      .then(trackerArr =>
        trackerArr.map(tracker => this.getCurrentFxWeekly(tracker))
      );
  };

  getCurrentFxWeekly = tracker => {
    fetch(
      this.BASE_URL +
        this.WEEKLY_QUERY +
        `from_symbol=${tracker.fromCurrency}&to_symbol=${
          tracker.toCurrency
        }&apikey=${API_KEY}`
    )
      // )
      // fetch(
      //   this.TEST_URL +
      //     `from_symbol=${tracker.fromCurrency}&to_symbol=${tracker.toCurrency}`
      // )
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
    if (Object.entries(data).length === 0) {
      return;
    } else if (data["Error Message"] || data["Note"]) {
      data["Error Message"]
        ? alert(data["Error Message"])
        : alert(data["Note"]);
      return;
    }

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

    const id = Math.round(Math.random() * 10000);

    this.setState({
      chartData: [
        ...this.state.chartData,
        {
          id: id,
          rangeStart: 0,
          conversion: `${fromCurrency}_to_${toCurrency}`,
          closeData: closeData,
          highData: highData,
          lowData: lowData,
          expand: false
        }
      ]
    });
  };

  createCards = () => {
    return this.state.chartData.map(conversionObject => {
      return (
        <FxCard
          key={conversionObject.id}
          conversionObject={conversionObject}
          rangeFilter={this.rangeFilter}
          removeCard={this.removeCard}
        />
      );
    });
  };

  removeCard = id => {
    const charts = this.state.chartData.filter(card => card.id !== id);
    this.setState({ chartData: charts });
  };

  expandCard = id => {
    const charts = this.state.chartData.map(card => {
      if (card.id === id) {
        card.expand = true;
        return card;
      } else {
        return card;
      }
    });
    this.setState({ chartData: charts });
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
