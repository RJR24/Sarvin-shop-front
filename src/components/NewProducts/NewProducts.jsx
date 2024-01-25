import React, { useEffect, useState } from "react";

import VR from "../../assets/images/pro02/VR.png";
import blackMagic from "../../assets/images/pro02/blackMagic.png";
import iphone from "../../assets/images/pro02/iphone14ProMax.png";
import galaxyS23 from "../../assets/images/pro02/galaxyS23.png";
import arrowCircleRight from "../../assets/images/arrows-btn-etc/arrow-circle-right.svg";

import NewProductsCard from "./NewProductsCard";

import "./newProductsStyles.css";
import axios from "axios";

// const newProductsList = [
//   {
//     data: { price: 100, specification: "model and details ...", rate: 5 },
//     image: iphone,
//   },
//   {
//     data: { price: 100, specification: "model and details ...", rate: 4.8 },
//     image: blackMagic,
//   },
//   {
//     data: { price: 100, specification: "model and details...", rate: 4.9 },
//     image: galaxyS23,
//   },
//   {
//     data: { price: 100, specification: "model and details ...", rate: 4.9 },
//     image: VR,
//   },
// ];

const NewProducts = () => {
  const [newProductsList, setNewProductsList] = useState([])

  useEffect(() => {
     axios
    // .get("https://fakestoreapi.com/products?limit=4")
    .get("http://localhost:5500/products")
    .then((res) => {
      setNewProductsList(res.data);
      // console.log(newProductsList);
    })
    .catch((er) => console.log(er));
    }, [])


  

  return (
    <div className="  nProductsContainer ">
      <div className=" row d-flex justify-content-between w-100 pb-3 nPTitle">
        <div className=" col titleText">New Products</div>
        <div className="col d-flex justify-content-end">
          <button className=" btn " >
            View all <img src={arrowCircleRight} alt="right arrow" />
          </button>
        </div>
      </div>

      <div className="row newCardContainer">
        {
           newProductsList.map((item) => (
              <NewProductsCard {...item} image={item.image} />
            ))
          }
      </div>
    </div>
  );
};

export default NewProducts;
