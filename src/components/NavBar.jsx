import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget";
import { Link } from 'react-router-dom';
    
export const NavBar = () => (
  <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={Link} to="/">MaseniShop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/category/gafas">Gafas</Nav.Link> 
        <Nav.Link as={Link} to="/category/casco">Casco</Nav.Link>
        <Nav.Link as={Link} to="/category/Protector Auditivo">Protector Auditivo</Nav.Link>
      </Nav> <CartWidget />
    </Container>
  </Navbar>
 );