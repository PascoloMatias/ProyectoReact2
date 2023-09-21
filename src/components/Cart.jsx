import { Button, Container, Table } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { ItemList } from "./ItemList";

export const Cart = () => {
    const { items, removeProduct } = useContext(CartContext)

    const total = () =>
    items.reduce(
        (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.precio, 0
    )

  return (
    <Container>
      <h1> Cart </h1>
      <Table>
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Cantidad</th>
            </tr>
        </thead>
        <tbody>
            {items.map(item => 
                <tr key={item.id}>
                    <td>{item.nombre}</td>
                    <td>{item.precio}</td>
                    <td>{item.quantity}</td>
                    <td> <button onClick={() =>      removeProduct(item.id)}>
                            Eliminar
                        </button>
                    </td>  
                </tr>
            )}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td> {total()} </td>
            </tr>
        </tfoot>
      </Table>
    </Container>
  );
};
