import React from "react";
import NewBestSellerCard from "./BestSellerCard";
import "./newBestSellerStyles.css";

import headSet from "../../assets/images/pro02/headSet.png";
import PS4 from "../../assets/images/pro02/playStation4.png";
import mcBookAir15 from "../../assets/images/pro02/mcBookAir15.png";
import airPodPro2 from "../../assets/images/pro02/airpodPro2.png";

import arrowCircleRight from "../../assets/images/arrows-btn-etc/arrow-circle-right.svg";

const BestSellersList = [
  {
    data: {
      price: 100,
      newPrice: 95,
      specification: "model and details model and details model and details ",
      rate: 4.9,
    },
    image: PS4,
  },
  {
    data: {
      price: 100,
      newPrice: 95,
      specification: "model and details model and details model and details ",
      rate: 4.9,
    },
    image: headSet,
  },
  {
    data: {
      price: 100,
      newPrice: 95,
      specification: "model and details model and details model and details ",
      rate: 5,
    },
    image: mcBookAir15,
  },
  {
    data: {
      price: 100,
      newPrice: 95,
      specification: "model and details model and details model and details ",
      rate: 4.8,
    },
    image: airPodPro2,
  },
];
const NewBestSellers = () => {
  return (
    <div className=" nBestSellerContainer ">
      <div className="bestSellerTitle">
        <div className="BSTitleText">Best Seller</div>
        <button className="btn ">
          View all <img src={arrowCircleRight} alt="right arrow" />
        </button>
      </div>

      <div className="cardContainer row">
        {BestSellersList.map((item) => (
          <NewBestSellerCard data={item.data} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default NewBestSellers;
