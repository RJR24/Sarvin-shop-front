import React from "react";
import "./basketMenuStyles.css";

import guaranteed from "../../assets/images/icons/guaranteed.svg";
import freeDelivery from "../../assets/images/icons/delivery.svg";
import plus from "../../assets/images/icons/plus.svg";
import minus from "../../assets/images/icons/minus.svg";
import bin from "../../assets/images/icons/bin.svg";

const BasketItemsCard = ({ productImage, productName }) => {
  return (
    <>
      <div className="itemsList mt-2 mb-1 d-flex justify-content-start px-2 py-1 gap-2">
        <div className="product-img d-flex align-items-center justify-content-center">
          <img className=" w-100" src={productImage} alt="{productName}" />
        </div>
        <div className="product-details">
          <div>
            <div className="model-name">
              {productName}
            </div>
            <div className="color-numbers d-flex flex-column justify-content-between mt-2">
              <span className="neutral-gray-717171">blue</span>
              <span className="neutral-gray-717171">×1</span>
            </div>
          </div>
          <div className="supports mt-2">
            
            <div className="neutral-gray-717171">
              {" "}
              <img src={freeDelivery} alt="Free Delivery" /> Free Delivery
            </div>
            <div className="neutral-gray-717171">
              {" "}
              <img src={guaranteed} alt="Guarantee" /> Guaranteed
            </div>
          </div>
          <div className="price-itemManagement d-flex justify-content-between mt-2">
            <div>$433.00</div>
            <div className="itemManagement d-flex justify-content-between align-items-center">
              <img src={bin} alt="bin" />
              <div className="plus-minus">
                <img src={minus} alt="minus sign" />
                <span>1</span>
                <img src={plus} alt="plus sign" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketItemsCard;
