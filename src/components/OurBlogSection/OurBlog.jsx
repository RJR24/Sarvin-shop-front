import React from "react";
import OurBlogCard from "./OurBlogCard";
import "./OurBlogStyles.css";

import Meta from "../../assets/images/blogImages/Meta.png";
import headSet from "../../assets/images/blogImages/headSet.svg";
import crypto from "../../assets/images/blogImages/crypto.png";

import arrowCircleRight from "../../assets/images/arrows-btn-etc/arrow-circle-right.svg";

const OurBlogList = {
  blog1: {
    data: {
      publishDate: 1,
      title: "Blog Title Here 1",
      blogSummary: "Blog summary here 1",
    },
    image: Meta,
  },
  blog2: {
    data: {
      publishDate: 2,
      title: "Blog Title Here 2",
      blogSummary: "Blog summary here 2",
    },
    image: headSet,
  },
  blog3: {
    data: {
      publishDate: 3,
      title: "Blog Title Here 3",
      blogSummary: "Blog summary here 3",
    },
    image: crypto,
  },
};

const NewBlogs = () => {
  return (
    <div className="mainBlogContainer">
      <div className="d-flex justify-content-between mt-5 mb-5 our-blog-title">
        <div className="BSTitleText">Our Blog</div>
        <button className="btn ">
          View all <img src={arrowCircleRight} alt="right arrow" />
        </button>
      </div>
      <div className="row blog-card-list">
        <div className="col-12 col-md-4">
          {OurBlogList.blog1 && (
            <OurBlogCard
              data={OurBlogList.blog1.data}
              image={OurBlogList.blog1.image}
              dir="vertical"
            />
          )}
        </div>
        <div className="col-12 col-md-8 d-flex flex-column gap-3">
          {OurBlogList.blog2 && (
            <OurBlogCard
              data={OurBlogList.blog2.data}
              image={OurBlogList.blog2.image}
              dir="horizontal"
            />
          )}
          {OurBlogList.blog3 && (
            <OurBlogCard
              data={OurBlogList.blog3.data}
              image={OurBlogList.blog3.image}
              dir="horizontal"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NewBlogs;
