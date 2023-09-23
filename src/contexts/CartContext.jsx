import React from "react";

export const CartContext = React.createContext(null);

export const CartProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);

  const addProduct = (product, quantity) => {

    const alredyExists = items.some((item) => item.id === product.id);

    if (!alredyExists) setItems (prev => [ ...prev, {...product, quantity}]);
    else{
      const actualizarProductos = items.map(
        item => {
          if (item.id === product.id)
          return {
         ...item, quantity: item.quantity + quantity,
        }
         else return item
        }
      )
      setItems(actualizarProductos)
    }
  };

  const totalWidget = items.reduce((acc, val) => acc + val.quantity, 0);

  const removeProduct = (id) => {
    const itemsFiltered = items.filter((item) => item.id !== id);
    setItems(itemsFiltered);
  };

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
