import { ItemCount } from "./ItemCount";

export const ItemDetail = ({product}) => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>{product.name} </h1>
        <img src={product.avatar} />
        <div>{product.stock} </div>
        <ItemCount/>
      </div>
) 