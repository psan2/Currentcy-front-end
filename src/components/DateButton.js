import React from "react";

const DateButton = props => {
  return <button onClick={props.filterThisYear}>{props.buttonText}</button>;
};

export default DateButton;
