import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export const Item = ({product}) => 
<Card key={product.id} style={{ width: "18rem" }}>
<Card.Img variant="top" src={product.avatar} />
<Card.Body>
  <Card.Title>{product.name}</Card.Title>
  <Card.Text>Elementos Proteccion Personal</Card.Text>
  <Button variant="primary">Go somewhere</Button>
</Card.Body>
</Card>