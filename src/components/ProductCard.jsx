import React from "react";
import { CartProductContext } from "../context/CartContext";
import { ThemeChangeContext } from "../context/ThemeContext";

const ProductCard = ({ product }) => {
  const { addToCart } = CartProductContext();
  const { modoOscuro } = ThemeChangeContext();

  return (
    <div
      className={`rounded-lg shadow-lg overflow-hidden transition-colors duration-300 ${
        modoOscuro ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <img
        src={`src/img/${product.img}.jpg`}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg text-center font-bold mb-2">{product.name}</h2>
        <h2 className="text-green-400 text-lg text-center font-bold mb-2">
          {product.price}$
        </h2>
        <button
          onClick={() => addToCart(product)}
          className={`py-3 px-5 rounded-xl w-full font-bold shadow-md transition-all duration-300 transform hover:scale-105 ${
            modoOscuro
              ? "bg-gray-700 hover:bg-gray-600 text-white"
              : "bg-emerald-500 hover:bg-emerald-600 text-white"
          }`}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;