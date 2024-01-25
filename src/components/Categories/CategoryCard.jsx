import React from "react";
import "./category.css";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="cat d-flex flex-column align-items-center col-sm-3 col-md-1 ">
      <img src={image} alt="" width="100%" /> <br />
      <span>{title}</span>
    </div>
  );
};

export default CategoryCard;
