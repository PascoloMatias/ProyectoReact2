import React from "react";

export const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);

  const addProduct = (product, quantity) =>
    setItems((prev) => [...prev, { ...product, quantity }]);

   const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0)

   console.log("total", totalWidget )         
   
    
  const removeProduct = (product) =>
    items.filter((item) => item.id !== product.id);

  const clear = () => setItems([]);

  const isInCart = (productId) => {
    return items.some((product) => product.id === productId);
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,

        removeProduct,

        isInCart,

        clear,

        items,

        totalWidget,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
