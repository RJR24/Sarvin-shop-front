import React from "react";
import { useSelector } from "react-redux";

import "./basketMenuStyles.css";
import BasketItemsCard from "./BasketItemsCard";

import checkoutTrolley from "../../assets/images/icons/checkout-trolley.svg";

const BasketDropdown = () => {
  const { basket, totalQty } = useSelector((state) => state.cartReducer);
  console.log(basket);
  return (
    <>
      <div className=" basket-main-container">
        <div className="itemsNumber">{totalQty} items</div>
        <div className="cartItems d-flex justify-content-center">
          <div className="items-container align-items-center">
            {basket.map((item) => (
              <BasketItemsCard {...item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="proceed-to-checkout d-flex align-items-center">
        <div className="total-price col-4">
          Grand total <br />
          $543.02
        </div>
        <div className="col-8">
          <button className=" checkout-btn btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2 px-4 py-2">
            <div> Proceed to cart </div>
            <img src={checkoutTrolley} alt="trolley" className="" />
          </button>
        </div>
      </div>
    </>
  );
};

export default BasketDropdown;
