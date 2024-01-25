import React from "react";
import "./topBrandsStyles.css";

import Apple from "../../assets/images/icons/Apple1.svg";
import Sony from "../../assets/images/icons/Sony.svg";
import Samsung from "../../assets/images/icons/Samsung.svg";
import Canon from "../../assets/images/icons/Canon.svg";
import huawei from "../../assets/images/icons/huawei.svg";
import Lenovo from "../../assets/images/icons/Lenovo.svg";

const TopBrands = () => {
  return (
    <>
      <div className="d-none d-lg-block">
        <div className="brandsTitle">Top Brands</div>
        <div className="brandsName d-flex justify-content-between align-items-center">
          <div>
            <img src={Apple} alt="Apple logo" />
          </div>
          <div>
            <img src={Sony} alt="Sony logo" />
          </div>
          <div>
            <img src={Samsung} alt="Samsung logo" />
          </div>
          <div>
            <img src={Canon} alt="Canon logo" />
          </div>
          <div>
            <img src={huawei} alt="huawei logo" />
          </div>
          <div>
            <img src={Lenovo} alt="Lenovo logo" />
          </div>
        </div>
      </div>
      <div className="d-block d-lg-none">
        <div className="brandsTitle">Top Brands</div>
        <div className="brandsName d-flex justify-content-between align-items-center text-center">
          <div>
            <img className="logo-mobile-version" src={Apple} alt="Apple logo" />
          </div>
          <div>
            <img className="logo-mobile-version" src={Sony} alt="Sony logo" />
          </div>
          <div>
            <img
              className="logo-mobile-version"
              src={Samsung}
              alt="Samsung logo"
            />
          </div>
          <div>
            <img className="logo-mobile-version" src={Canon} alt="Canon logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBrands;
