import React from "react";
import { CartProductContext } from "../context/CartContext";
import { ThemeChangeContext } from "../context/ThemeContext";

const Header = () => {
  const {onOpen} = CartProductContext();
  const { toggleModo, modoOscuro } = ThemeChangeContext();
  return (
    <header
      className={`py-4 px-6 shadow-md flex justify-between items-center sticky top-0 z-50 
        ${modoOscuro ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <h1 className="text-2xl font-bold">Libre Market</h1>
      <button
          onClick={toggleModo}
          className="bg-yellow-500 dark:bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105"
        >
          {modoOscuro ? "Modo Claro" : "Modo Oscuro"}
        </button>
      <button
        onClick={onOpen}
        className="bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white py-2 px-4 rounded-lg font-semibold shadow-md transition-all duration-300 transform hover:scale-105 active:scale-95"
      >
        Carrito
      </button>
    </header>
  );
};

export default Header;
