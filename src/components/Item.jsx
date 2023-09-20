import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => {
  const navigate = useNavigate()
  return  (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.avatar} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
    
         {/* <Card.Text> {product.categoryId} </Card.Text>  */}
         <Card.Text> Stock: {product.stock}</Card.Text> 
         {/* <Card.Text>{product.precio}</Card.Text> */}
        <Button onClick={() => navigate(`/item/${product.id}`)} variant="primary">Ver Producto</Button>
        <ItemCount></ItemCount>
      </Card.Body>
    </Card>
  );
};

