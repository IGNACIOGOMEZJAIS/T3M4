import React from "react";
import products from "../db/products.json";
import ProductCard from "./ProductCard";
import { ThemeChangeContext } from "../context/ThemeContext";

const ProductList = () => {
  const { modoOscuro } = ThemeChangeContext();

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${
        modoOscuro ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;