import { useContext } from "react";
import cart from "../carrito/1b8869c92f127555c8c5f9fa4c500ae2.png";
import { CartContext } from "../contexts/CartContext";


export const CartWidget = () => {
    
    const {totalWidget} = useContext(CartContext)

    // const {items} = useContext(CartContext) 
    //{items.length}  

    return( 
<>
    <img src={cart} alt="Cart" /> <span>{totalWidget}</span>
</>
)};
