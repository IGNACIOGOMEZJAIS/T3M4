// src/context/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [modoOscuro, setModoOscuro] = useState(
    localStorage.getItem("modoOscuro") === "true"
  );

  useEffect(() => {
    if (modoOscuro) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [modoOscuro]);

  const toggleModo = () => {
    const nuevoModo = !modoOscuro;
    setModoOscuro(nuevoModo);
    localStorage.setItem("modoOscuro", nuevoModo);
    
    if (nuevoModo) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <ThemeContext.Provider value={{ modoOscuro, toggleModo,setModoOscuro }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const ThemeChangeContext = () => useContext(ThemeContext);