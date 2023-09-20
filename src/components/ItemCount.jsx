import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";



export const ItemCount = ({ product }) => {

  const { addProduct, isInCart } = useContext(CartContext);

  const [count, setCount] = useState(0);

  const stock = product?.stock;

  const handleDecreaseCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncreaseCount = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const onAdd = () => {
    const ifExistProduct = isInCart(product.id);
    if (!ifExistProduct) {
      addProduct(product, count);
      return;
     }

  };

  return (
     <div className="itemCount"> <button onClick={handleDecreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={() => handleIncreaseCount()} >+</button>
      <button onClick={onAdd} disabled={count === 0}> Agregar al carrito</button>
    </div>
  );
};