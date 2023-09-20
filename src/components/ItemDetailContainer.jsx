import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {ItemDetail} from "./ItemDetail"
import { getFirestore, getDoc, doc } from "firebase/firestore";

import data from "../data/products.json";
import {ItemList} from "./ItemList"; 

export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

// useEffect(() => {
//   const db = getFirestore();

//   const refDoc = doc(db, "productos", id);

//   getDoc (refDoc).then ((snapshot) =>{
//     setProduct({id: snapshot.id, ...snapshot.data()});
//   });
// }, []);
  
    useEffect(() => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          const findProductById = data.find((product) => product.id === id);
  
          resolve(findProductById);
        }, 2000);
      });
  
      promise.then((data) => 
      {setProduct(data) 
      console.log(data,"data")} 
      );
    }, [id]);
       
    if (!product) return <div> Loading... </div>;
    
  return (
    <Container className="mt-4">
      {/* <h1> {DETALLE} </h1> */}
      <ItemDetail product={product}>/ </ItemDetail>
    </Container>
  );
};
