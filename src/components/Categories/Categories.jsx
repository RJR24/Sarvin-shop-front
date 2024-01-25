import React from "react";

import smartPhone from "../../assets/images/pro02/smart-phone.png";
import smartWatch from "../../assets/images/pro02/smart-watch.png";
import camera from "../../assets/images/pro02/camera.png";
import accessories from "../../assets/images/pro02/accessories.png";
import gaming from "../../assets/images/pro02/gaming.png";
import laptop from "../../assets/images/pro02/laptop.png";

import CategoryCard from "./CategoryCard";

import "./category.css";

const catList = [
  { title: "Accessories", image: accessories },
  { title: "Camera", image: camera },
  { title: "Laptop", image: laptop },
  { title: "Smart Phone", image: smartPhone },
  { title: "Gaming", image: gaming },
  { title: "Smart Watch", image: smartWatch },
];
const Categories = () => {
  return (
    <div className="row cat-container d-flex justify-content-center gap-4 mt-3">
      {catList.map((item) => (
        <CategoryCard title={item.title} image={item.image} />
      ))}
    </div>
  );
};

export default Categories;
