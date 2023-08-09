import React, { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card";
import './Shop.scss'

const Shop = () => {
  const { products } = useContext(ProductContext);
  console.log("value of the shop ", products);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;