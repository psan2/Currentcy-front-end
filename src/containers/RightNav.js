import React, { Fragment } from "react";

// const CURRENT_RATE_URL =
//   "https://www.freeforexapi.com/api/live?pairs=EURUSD,EURGBP,GBPUSD,USDJPY,AUDUSD,USDCHF,NZDUSD,USDCAD,USDZAR";

const RightNav = () => {
  // const getCurrentRates = () => {
  //   fetch(CURRENT_RATE_URL, { mode: "no-cors" })
  //     .then(resp => resp.json())
  //     .then(console.log);
  // };

  return (
    <Fragment>
      <div className="r-nav-live-feed">
        LIVE FEED
        {/* Source:
        <a href="https://www.freeforexapi.com">Free Forex API</a> */}
      </div>
      <div className="r-nav-filters">FILTERS</div>
    </Fragment>
  );
};

export default RightNav;
