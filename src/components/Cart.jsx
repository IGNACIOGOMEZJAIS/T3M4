import React, { useEffect, useState } from "react";
import { CartProductContext } from "../context/CartContext";
import { ThemeChangeContext } from "../context/ThemeContext";

const Cart = () => {
  const { removeFromCart, cart, totalPrice, close, updateQuantity } = CartProductContext();
  const {modoOscuro, setModoOscuro} = ThemeChangeContext();

  useEffect(() => {
    const temaGuardado = localStorage.getItem("modoOscuro");
    if (temaGuardado === "true") {
      setModoOscuro(true);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
      onClick={close}
    >
      <div
        className={`${
          modoOscuro ? "bg-gray-900 text-white border-gray-700" : "bg-white text-black border-gray-300"
        } rounded-lg p-6 w-full max-w-2xl max-h-[80vh] shadow-2xl border overflow-y-auto relative`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className={`absolute top-4 right-4 text-2xl ${
            modoOscuro ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-black"
          }`}
        >
          &times;
        </button>

        <h2 className="text-lg font-bold text-center mb-4">
          {cart.length === 0 ? (
            <p className={`${modoOscuro ? "text-gray-400" : "text-gray-600"} text-center`}>
              No tienes productos en tu lista
            </p>
          ) : (
            <p className={`${modoOscuro ? "text-gray-400" : "text-gray-600"} text-center`}>
              Tus productos
            </p>
          )}
        </h2>

        <h1 className="text-lg font-bold text-center mb-4">
          Total: {totalPrice}$
        </h1>

        <div className="space-y-4">
          {cart.length === 0 ? (
            <p className={`${modoOscuro ? "text-gray-400" : "text-gray-600"} text-center`}>
              No tienes productos en tu lista
            </p>
          ) : (
            cart.map((product) => (
              <div
                key={product.id}
                className={`flex items-center rounded-lg shadow-md p-4 space-x-4 border ${
                  modoOscuro ? "bg-gray-800 border-gray-700" : "bg-gray-100 border-gray-300"
                }`}
              >
                <img
                  src={`src/img/${product.img}.jpg`}
                  alt={product.name}
                  className="w-20 h-28 object-cover rounded-md"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{product.name}</h3>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(product.id, product.quantity - 1)}
                    className={`py-1 px-3 rounded-md font-semibold transition-colors duration-300 ${
                      modoOscuro ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-300 hover:bg-gray-400 text-black"
                    }`}
                  >
                    -
                  </button>

                  <span className="text-lg">{product.quantity}</span>

                  <button
                    onClick={() => updateQuantity(product.id, product.quantity + 1)}
                    className={`py-1 px-3 rounded-md font-semibold transition-colors duration-300 ${
                      modoOscuro ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-300 hover:bg-gray-400 text-black"
                    }`}
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white py-2 px-4 rounded-md font-semibold transition-colors duration-300"
                >
                  <i className="ph ph-trash"></i> Eliminar
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
