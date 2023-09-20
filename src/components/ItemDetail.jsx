import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({product}) => {
  const {addItem} = useContext (CartContext)
  const onAdd = count => addItem(product, count)

  return(
  <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>{product.name} </h1>
        <img src={product.avatar} />
        <div>{product.stock} </div>
        <ItemCount product={product} onAdd = {onAdd}/>
      </div>
      ) 
  }