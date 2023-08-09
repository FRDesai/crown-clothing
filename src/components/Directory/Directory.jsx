import React from "react";
import "./Directory.styles.scss";
import Category from "../Category/Category";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <Category category={category} />
      ))}
    </div>
  );
};

export default Directory;
