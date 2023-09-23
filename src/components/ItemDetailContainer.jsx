import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import {ItemDetail} from "./ItemDetail"
import { getFirestore, getDoc, doc } from "firebase/firestore";



export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

 useEffect(() => {
   const db = getFirestore();

   const refDoc = doc(db, "productos", id);

   getDoc (refDoc).then ((snapshot) =>{
     setProduct({id: snapshot.id, ...snapshot.data()});
   });
 }, [id]);
  

    if (!product) return <div> Loading... </div>;
    
  return (
    <Container className="mt-4">
      <ItemDetail product={product}>/ </ItemDetail>
    </Container>
  );
};
