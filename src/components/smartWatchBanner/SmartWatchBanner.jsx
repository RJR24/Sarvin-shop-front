import React from "react";
import "./smartWatchBannerStyles.css";

import rightLayer from "../../assets/Ellipse.svg";
import smartWatch from "../../assets/smartWatch.png";

const SmartWatch = () => {
  return (
    <div className="mainLayer row">
      <div className="col">
        <div className="SWTitleArea">
          <div className="SWName">SMART WATCH</div>
          <div className="slogan">Various designs and brands</div>
          <div>
            <button className="btn btn-danger">View</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="smartWatch">
          <img src={smartWatch} alt="smartWatch" />
        </div>
      </div>
      {/* <img src={rightLayer} alt="rightLayer" className="rightLayer" /> */}
    </div>
  );
};

export default SmartWatch;
