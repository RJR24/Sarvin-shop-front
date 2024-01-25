import React from "react";

import "./productStyles.css";
import { PRODUCTS } from "../../data/products";

import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/slices/cartSlice";

// import macBookProM2 from "../../assets/images/pro02/macBook-pro-m2/macBook-pro-m2.png";
import macBookProM201 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086019.png";
import macBookProM202 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086021.png";
import macBookProM203 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086022.png";
import macBookProM204 from "../../assets/images/pro02/macBook-pro-m2/Frame 26086048.png";
import arrowRight from "../../assets/images/arrows-btn-etc/arrow-circle-right.svg";
import discountIcon from "../../assets/images/icons/discount.svg";
import threeMonths from "../../assets/images/icons/3-months.svg";
import sixMonths from "../../assets/images/icons/6-months.svg";
import twelveMonths from "../../assets/images/icons/12-months.svg";
import eighteenMonths from "../../assets/images/icons/18-months.svg";

import star from "../../assets/images/icons/star.svg";
import guaranteed from "../../assets/images/icons/guaranteed.svg";
import delivery from "../../assets/images/icons/delivery.svg";
import shop from "../../assets/images/icons/shop.svg";

import selectColorGrey from "../../assets/images/arrows-btn-etc/select-color-grey.svg";
import tickCircle from "../../assets/images/arrows-btn-etc/tick-circle.svg";

const Product = () => {
  const dispatcher = useDispatch();
  const addToCart = () => {
    dispatcher(addToBasket({ basket: PRODUCTS[3] }));
  };
  return (
    <div className=" row p-container">
      <div className=" col-md-6 col-lg-5 product-div">
        <div className="product-image">
          <img
            src={PRODUCTS[5].productImage}
            alt="MacBook pro m2"
            className=" w-100 "
          />
        </div>
        <div className="product-sub-image row d-flex align-items-center justify-content-center mt-3 g-1 mb-2">
          <div className="col d-flex justify-content-center">
            <img src={macBookProM201} alt="macBook Pro m2" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={macBookProM202} alt="macBook Pro m2" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={macBookProM203} alt="macBook Pro m2" />
          </div>
          <div className="col d-flex justify-content-center">
            <img src={macBookProM204} alt="macBook Pro m2" />
          </div>
        </div>
      </div>
      <div className=" col-md-6 col-lg-4 specifications">
        <div className="sTop d-flex justify-content-start flex-column gap-2">
          <div className="pro-name">
            {PRODUCTS[3].productName} MNEJ3 2022 LLA {<br />} 13.3 inch
          </div>
          <div className="rate-color d-flex justify-content-start flex-column gap-4">
              <div className="rate-sold d-flex align-items-center">
                <div className="p-rate d-flex align-items-center">
                  {" "}
                  <img src={star} alt="star" /> 4.9
                </div>
                <div className="sold-number">sold 125</div>
              </div>
            <div className="tech-heim-services d-flex">
              <span className="services-item gap-1 d-flex align-items-center justify-content-start">
                <img src={shop} alt="" /> In Stock
              </span>
              <span className="services-item gap-1 d-flex align-items-center justify-content-center ">
                <img src={guaranteed} alt="" /> Guaranteed
              </span>
              <span className="services-item gap-1 d-flex align-items-center justify-content-center ">
                <img src={delivery} alt="" /> Free Delivery
              </span>
            </div>
            <div className="select-color d-flex">
              <span>Select color</span>
              <div className=" d-flex gap-2">
                <img src={selectColorGrey} alt="select Color Grey" />
                <img src={tickCircle} alt="tick" className="tickCircle" />
              </div>
            </div>
          </div>
        </div>
        <div className="product-info">
          <div className=" d-flex flex-column justify-content-between ">
            <div className="d-flex">
              <span className=" col-5 mt-2 mb-2">Brand</span>
              <span className=" col-3">Apple</span>
            </div>
            <div className="d-flex">
              <span className=" col-5 mt-2 mb-2">Model Name </span>
              <span className=" col-3">MacBook Pro</span>
            </div>
            <div className="d-flex">
              <span className=" col-5 mt-2 mb-2">Screen Size</span>
              <span className=" col-3">13.3 Inches</span>
            </div>
            <div className="d-flex">
              <span className=" col-5 mt-2 mb-2">Storage Size</span>
              <span className=" col-3">256 GB</span>
            </div>
            <div className="d-flex">
              <span className=" col-5 mt-2 mb-2">CPU Model</span>
              <span className=" col-3">Core i5</span>
            </div>
            <div style={{ color: "#0C68F4" }}>
              show more{" "}
              <img
                src={arrowRight}
                alt="arrow to right"
                style={{ color: "#0C68F4" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="price d-md-none d-lg-block col-lg-3 d-flex flex-column">
        <div className="price-payment">
          <div className=" payment-container d-flex flex-column ">
            <div className="price-discount">
              <div className="discount d-flex justify-content-between">
                <div>$ 1299.00</div>
                <div>
                  {" "}
                  <img src={discountIcon} alt="discountIcon" />
                  -12%
                </div>
              </div>
              <div className="last-price neutral-gray-717171 fw-lighter">
                <span>last price</span> <span>$ 1410,87</span>
              </div>
            </div>
            <div className="payment-method d-flex flex-column w-100">
              <div className=" mt- d-flex flex-column">
                <div className=" d-flex flex-start align-items-center gap-1">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="Pay Now"
                      id="dark"
                      value="dark"
                      // onChange={onChange}
                      checked={true}
                    />
                    Pay Now
                  </label>
                </div>
                <div className=" d-flex flex-start align-items-center">
                  <label htmlFor="">
                    <input
                      type="radio"
                      name="dark"
                      id="dark"
                      value="dark"
                      // onChange={onChange}
                      checked={true}
                    />
                    Buy in installments
                  </label>
                </div>
              </div>
              <div className="installments row d-flex justify-content-between">
                <div className="col-3 months">
                  <img src={threeMonths} alt="" />
                </div>
                <div className="col-3 months">
                  {" "}
                  <img src={sixMonths} alt="" />
                </div>
                <div className="col-3 months">
                  {" "}
                  <img src={twelveMonths} alt="" />{" "}
                </div>
                <div className="col-3 months">
                  {" "}
                  <img src={eighteenMonths} alt="" />{" "}
                </div>
              </div>
              <div className="monthly-payment">$433.00/ month</div>
            </div>

            <div className="purchase d-flex flex-column gap-2 mt-2">
              <button className="btn btn-primary">Buy Now</button>
              <button className="btn btn-outline-primary" onClick={addToCart}>
                add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
