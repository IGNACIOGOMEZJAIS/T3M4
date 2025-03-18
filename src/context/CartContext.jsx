import { createContext, useState, useEffect, useContext } from "react";

 const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((product) => product.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id ? { ...product, quantity: Math.max(1, quantity) } : product
      )
    );
  };

  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const close = () => setIsModalOpen(false);
  const onOpen = () => setIsModalOpen(true);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, totalPrice,close,onOpen,isModalOpen }}>
      {children}
    </CartContext.Provider>
  );
};

export function CartProductContext(){
    return useContext(CartContext)
}