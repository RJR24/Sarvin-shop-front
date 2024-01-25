import React from "react";
import star from "./../../assets/images/arrows-btn-etc/star.svg";

const NewBestSellerCard = ({ data, image }) => {
  return (
    <div className="newBestSellerCard col col-sm-3 col-md-3 d-flex flex-column justify-content-between align-items-center ">
      <div>
        <img src={image} alt="" />
      </div>

      <div className="cardInfo d-flex flex-column align-items-md-start">
        <div>{data.specification}</div>

        <div className="price-rate d-flex justify-content-between align-items-center">
          <div>{data.price}</div>
          <div className="rate d-flex align-items-center justify-content-between">
            <div className=" mx-1">{data.rate}</div>
            <div>
              <img src={star} alt="star sign" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBestSellerCard;
