import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketDropdown from "../BasketMenu/BasketDropdown";
import "./user-basket-styles.css"

import basket from "../../assets/images/icons/basket.svg";

const UserBasketComponent = () => {
  const basketItems = useSelector((state) => state.cartReducer.basket);
  const { totalQty } = useSelector((state) => state.cartReducer);
  return (
    <div className="basket menu-trigger d-inline-block">
      <Link to="/cart" className="pe-3 position-relative">
        <img src={basket} alt="basket" />
        <span className="position-absolute d-flex justify-content-center text-white rounded-circle">
          {totalQty}
        </span>
      </Link>
      <div className=" basket-dropdown dropdown-menu ">
        {basketItems.length ? (
          <BasketDropdown />
        ) : (
          <div>
            <h3 className="bg-warning" width="100px">
              Basket is empty!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserBasketComponent;
