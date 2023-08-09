import React from "react";
import "./Category.styles.scss";

const Category = ({ category }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      ></div>
      <div className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop now</p>
      </div>
    </div>
  );
};

export default Category;
