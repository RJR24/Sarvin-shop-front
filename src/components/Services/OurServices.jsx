import React from "react";

import "./servicesStyles.css";

import techNewsIcon from "../../assets/images/icons/screen.svg";
import shipping from "../../assets/images/icons/shipping.svg";
import clock from "../../assets/images/icons/clock.svg";
import guarantee from "../../assets/images/icons/guarantee.svg";

const OurServices = () => {
  return (
    <>
      <div className="row servicesContainer d-none d-md-flex">
        <div className="col-sm-12 col-md-3 services">
          <div className="image">
            <img src={techNewsIcon} alt="screen" />
          </div>
          <div className="text">
            <span>Latest and Greatest Tech</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 services">
          <div className="image">
            <img src={guarantee} alt="guarantee" />
          </div>
          <div className="text">
            <span>Guarantee</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 services">
          <div className="image">
            <img src={shipping} alt="shipping" />
          </div>
          <div className="text">
            <span>Free Shipping over 1000$</span>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 services">
          <div className="image">
            <img src={clock} alt="clock" />
          </div>
          <div className="text">
            <span>24/7 Support</span>
          </div>
        </div>
      </div>

      {/* <div className="row servicesContainer2">
      <div className="col-sm-12 services">
       <div className="image">
         <img src={techNewsIcon} alt="screen" />
        </div>
       <div className="text">
         <span>Latest and Greatest Tech</span>
        </div>
      </div>
      <div className="col-sm-12 services">
       <div className="image">
         <img src={shipping} alt="shipping" />
        </div>
       <div className="text">
         <span>Guarantee</span>
        </div>
      </div>
      <div className="col-sm-12 services">
       <div className="image">
         <img src={guarantee} alt="guarantee" />
        </div>
       <div className="text">
         <span>Free Shipping over 1000$</span>
        </div>
      </div>
      <div className="col-sm-12 services">
       <div className="image">
         <img src={clock} alt="clock" />
        </div>
       <div className="text">
         <span>24/7 Support</span>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default OurServices;
