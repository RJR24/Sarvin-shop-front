import React from "react";
import "./heroSectionStyles.css";

import HeroImage from "../../assets/Hero-section.png";

const Hero = () => {
  return (
    <div className=" row hero-container d-flex justify-content-between">
      <div className="col-5  d-flex flex-column justify-content-between gap-3 gap-md-5">
        <div className="d-flex flex-column  gap-3 gap-md-5">
          <div className="company-name">Tech Heim</div>
          <div className="company-slogan ">
            <div style={{ color: "#042352" }}>
              "Join the
              <span style={{ color: "#F45E0C" }}> digital revolution"</span>
            </div>{" "}
          </div>
        </div>
        <div>
          <button className="explore-button d-flex">Explore more</button>
        </div>
      </div>
      <div className="col col-md-7 heroImage">
        <img src={HeroImage} alt="laptop" className="w-100" />
      </div>
    </div>
  );
};

export default Hero;
