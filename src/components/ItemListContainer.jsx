
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";


import data from "../data/products.json";
import {ItemList} from "./ItemList"; 

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const [isLoading, setIsLoading] = useState(true);


  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((products) => {

      if (!id) {
        setProducts(products);       
      } else {
        const productsFiltered = products.filter(
          (product) => product.category === id
        );
        setProducts(productsFiltered);       
      }
      setIsLoading(false)
    });
  },[])

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
