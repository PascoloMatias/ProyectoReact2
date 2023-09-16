import { Children, createContext, useState } from "react"; //creo un contexto

export const CartContext = createContext([]);

export const CartProvider = ({children}) => {
    const [items, setItems] = useState([])


    const addItem = (product, quantity) => setItems(prev => [...prev, {product, quantity}])
    console.log(items)

    const removeItem = id => {
         const itemFiltered = items.filter(item => item.id === id)
        setItems(itemFiltered)
     }

    const clear = () => setItems([])

    return (
        <CartContext.Provider 
        value ={{addItem, removeItem, clear}}>
            {children}</CartContext.Provider>
    )
};


