import React from "react";
import star from "./../../assets/images/arrows-btn-etc/star.svg";

const NewProductsCard = ({ image, title, price, rating }) => {
  return (
    <div
      className="col col-sm-5 col-md-3 col-lg-2
     d-flex flex-column align-items-center justify-content-center  newProductCard"
    >
      <div>
        <img src={image} alt="" width="100px" />
      </div>

      <div className="info-section">
        <div>{title}</div>

        <div className="nPPrice-rate">
          <div>${price}</div>
          <div id="rate-sign d-flex ">
            <div>
              <img src={star} alt="star sign" />
            </div>
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsCard;
