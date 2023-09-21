import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { ItemCount } from "./ItemCount";

export const Item = ({ product }) => {

  const navigate = useNavigate()

  return  (
    <Card key={product.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>

        <Card.Title>
          {product.nombre}
        </Card.Title>
        <Card.Text>
          <b>Category:</b> {product.categoryId}{" "}
        </Card.Text>
        <Card.Text>
          <b>Stock:</b> {product.stock}
        </Card.Text>
        <Card.Text>
          <b>Price:</b> {product.precio}
        </Card.Text>
        <Button onClick={() => navigate(`/item/${product.id}`)} variant="primary">Ver Producto</Button>
        <ItemCount></ItemCount>
      </Card.Body>
    </Card>
  );
};

