import React from "react";

import "./homeBanner.css";

import ps5Mobile from "../../assets/images/banners/ps5-mobile.svg";
import ps5 from "../../assets/images/banners/ps5.png";
import iphone15 from "../../assets/images/banners/iphone15.png";
import iphone15Mobile from "../../assets/images/banners/iphone15-mobile.svg";

const HomeBanner = () => {
  return (
    <div className=" row d-flex justify-content-center gap-2 mt-5 mb-5">
      <div className="iphone15 col-md-7  ">
        <picture>
          <source
            className="iphone-desktop-size"
            srcSet={iphone15}
            media="(min-width : 768px)"
          />
          <img src={iphone15Mobile} className="mobile-images" alt="iphone15" />
        </picture>
      </div>
      <div className="ps5 col-md-4 ">
        <picture>
          <source srcSet={ps5} media="(min-width:768px )" />
          <img src={ps5Mobile} className="mobile-images" alt="play station" />
        </picture>
      </div>
    </div>
  );
};

export default HomeBanner;
