
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { getFirestore, getDocs, collection } from "firebase/firestore";


import data from "../data/products.json";
import {ItemList} from "./ItemList"; 




export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = collection(db, "productos");

    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) console.log("no results");
        else {
          const data = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          });

          setProducts(data);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if(isLoading) return <div> Loading... </div>
  
  
  return (
    <Container className="mt-4">
      <h1> {props.gretting} </h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <ItemList products={products} />
      </div>
    </Container>
  );
};

