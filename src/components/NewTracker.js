import React from "react";

export default class NewTracker extends React.Component {
  state = { fromCurrency: "", toCurrency: "" };

  currencies = [
    { code: "ARS", name: "Argentine Peso (ARS)" },
    { code: "AUD", name: "Australian Dollar (AUD)" },
    { code: "CAD", name: "Canadian Dollar (CAD)" },
    { code: "CHF", name: "Swiss Franc (CHF)" },
    { code: "CNY", name: "Chinese Yuan (CNY)" },
    { code: "DKK", name: "Danish Krone (DKK)" },
    { code: "EUR", name: "Euro (EUR)" },
    { code: "GBP", name: "British Pound Sterling (GBP)" },
    { code: "INR", name: "Indian Rupee (INR)" },
    { code: "MXN", name: "Mexican Peso (MXN)" },
    { code: "NZD", name: "New Zealand Dollar (NZD)" },
    { code: "RUB", name: "Russian Ruble (RUB)" },
    { code: "USD", name: "United States Dollar (USD)" },
    { code: "ZAR", name: "South African Rand (ZAR)" }
  ];

  render() {
    return (
      <div className="fx-card new-currency">
        <div>
          <h3>Track another exchange rate</h3>
          <label>From Currency: </label>
          <select
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
            name="fromCurrency"
          >
            <option value="" />
            {this.currencies.map(currency => {
              return (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              );
            })}
          </select>
          <br />
          <label>To Currency: </label>
          <select
            onChange={e => {
              this.setState({ [e.target.name]: e.target.value });
            }}
            name="toCurrency"
          >
            <option value="" />
            {this.currencies.map(currency => {
              return (
                <option key={currency.code} value={currency.code}>
                  {currency.name}
                </option>
              );
            })}
          </select>
          <br />
          <button
            onClick={() =>
              this.props.newTracker(
                this.state.fromCurrency,
                this.state.toCurrency
              )
            }
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
