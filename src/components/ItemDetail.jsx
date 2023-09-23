import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({product}) => {
  const {addItem} = useContext (CartContext)
  const onAdd = count => addItem(product, count)

  return(
  <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>{product.nombre} </h1>
        <img alt="" src={product.imagen} />
        <div> Stock: {product.stock} </div>
        <div> Precio: ${product.precio} </div>
        <ItemCount product={product} onAdd = {onAdd}/>
      </div>
      ) 
  }