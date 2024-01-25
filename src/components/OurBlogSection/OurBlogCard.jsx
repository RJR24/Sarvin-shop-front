import React from "react";
import "./OurBlogStyles.css";

const OurBlogCard = ({ data, image, dir }) => {
  return (
    <>
      {dir === "horizontal" ? (
        <div className="card" style={{ border: "none" }}>
          <div className="row g-0 card-background">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start w-100"
                alt={data.title}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <span className="card-text">{data.blogSummary}</span>
                <span className="card-text">
                  <small className="text-body-secondary">
                    {data.publishDate}
                  </small>
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="card h-100 card-background" style={{ border: "none" }}>
          <img src={image} className="card-img-top" alt={data.title} />

          <div className="card-body">
            <span className="card-text">
            Meta Platforms plans to release free software that...
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default OurBlogCard;
