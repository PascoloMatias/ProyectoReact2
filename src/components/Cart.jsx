import { Container, Table, Form, } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";

import { getFirestore, collection, addDoc } from "firebase/firestore"




export const Cart = () => {
    const [formValues, setFormValues,] = useState({
        name: "",
        email: "",
        phone:"",
    })

    const { clear, items, removeProduct } = useContext(CartContext)

    const total = () =>
    items.reduce(
        (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.precio, 0
    )

    const handleChange = ev => {
        setFormValues(prev => ({
            ...prev,[ev.target.name]: ev.target.value,
        }))
    }

    const sendOrder = () => {
        const order = {
            buyer: formValues,
            items: items,
            total: total(),
        }
    
        const db = getFirestore()
        const orderCollection = collection(db, "orders")
    
        addDoc(orderCollection, order).then(({ id }) => {
            if (id) {
                setFormValues({
                    name: "",
                    email: "",
                    phone:"",
                })
                
                clear()
                alert("su orden: " + id + "ha sido completada")
            }
        })
    }

  return (
    <Container>
      <h1> Mis Productos </h1>
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
                    <td><button onClick={() =>      removeProduct(item.id)}>
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

            <tr><button onClick={() => clear()}> Vaciar Carrito
                </button>
            </tr>
        </tfoot>
      </Table>
      <h2> Ingresar Datos de Usuario </h2>
      <Form>
        <Form.Group className= "mb-3" controlId="formBasicEmail">
            <Form.Label > Nombre </Form.Label>
            <Form.Control 
              onChange={handleChange}
              value={formValues.name}
              type= "text"
              name= "name">    
            </Form.Control>
        </Form.Group>

        <Form.Group className= "mb-3" controlId="formBasicEmail">
            <Form.Label > Email</Form.Label>
            <Form.Control 
              onChange={handleChange}
              value={formValues.email}
              type= "email"
              name= "email">    
            </Form.Control>
        </Form.Group>

        <Form.Group className= "mb-3">
            <Form.Label > Telefono </Form.Label>
            <Form.Control 
              onChange={handleChange}
              value={formValues.phone}
              type= "text"
              name= "phone">    
            </Form.Control>
        </Form.Group>
      </Form>
      <button onClick={sendOrder}> Comprar </button>
    </Container>
  );
};


